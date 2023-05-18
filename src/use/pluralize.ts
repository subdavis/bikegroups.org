export default function pluralize(singular: string, array: any[]) {
  return array.length === 1 ? singular : singular + 's'
}