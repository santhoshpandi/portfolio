
export function parseDate(date:string|undefined):Date{

  if(!date) return new Date(0);

  const parts = date?.split('-')
  return new Date(Number(parts[2]),Number(parts[1])-1, Number(parts[0]));
}