export const formatDateRange = (dateRange: { startDate: Date; endDate: Date }) => {
  const { startDate, endDate } = dateRange;

  if (startDate.getTime() === endDate.getTime()) return `${startDate.toLocaleDateString('pt-BR')}`;
  return `${startDate.toLocaleDateString('pt-BR')} - ${endDate.toLocaleDateString('pt-BR')}`;
};
