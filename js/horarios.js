// Regras de horário da agenda OS 061 - SOSSEGO (usado por agenda.js e pdf.js)
// Duração de cada serviço, em horas
const DURACAO_SERVICO = { 'Instalação': 2, 'Desinstalação': 2, 'Manutenção': 2 };

// Horários de INÍCIO permitidos em cada local (cada serviço dura 2h).
// Para mudar um horário, edite só esta lista (e a regra correspondente em firestore.rules).
const HORARIOS_SOSSEGO = ['08:30', '10:30', '13:00', '15:00'];
const HORARIOS_PADRAO = ['08:00', '09:00', '10:00', '13:00', '14:00', '15:00']; // 08-12h e 13-17h (12h às 13h é almoço)
const HORARIOS_POR_LOCAL = {
  'Atendimento C.I': HORARIOS_PADRAO,
  'SOSSEGO - OFICINA PARVI': HORARIOS_SOSSEGO,
  'SOSSEGO - CENTRO DE FORNECEDOR': HORARIOS_SOSSEGO,
  'CANAÃ - GARAGEM FORNECEDOR': HORARIOS_PADRAO
};

const duracaoServico = s => DURACAO_SERVICO[s] ?? 2;
const minDe = hhmm => parseInt(String(hhmm).slice(0, 2), 10) * 60 + parseInt(String(hhmm).slice(3, 5) || '0', 10);
const hhmmDe = min => String(Math.floor(min / 60)).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
// horário em que o serviço termina, ex.: fimDe('08:30', 'Instalação') -> '10:30'
const fimDe = (horario, servico) => hhmmDe(minDe(horario) + duracaoServico(servico) * 60);
// ex.: "08:30 às 10:30"
const faixaHorario = a => a.horario + ' às ' + fimDe(a.horario, a.servico);

const horariosDoLocal = local => HORARIOS_POR_LOCAL[local] || HORARIOS_PADRAO;
const horarioValido = (horario, local) => horariosDoLocal(local).includes(horario);
// texto dos horários para mensagens, ex.: "08:30, 10:30, 13:00 e 15:00"
const textoHorarios = local => {
  const l = horariosDoLocal(local);
  return l.length > 1 ? l.slice(0, -1).join(', ') + ' e ' + l[l.length - 1] : l[0];
};
// blocos de 30 min que o serviço ocupa (serve para detectar choque de horários entre agendamentos)
const blocosDe = (horario, servico) => {
  const ini = minDe(horario) / 30, n = duracaoServico(servico) * 2;
  return Array.from({ length: n }, (_, k) => ini + k);
};
