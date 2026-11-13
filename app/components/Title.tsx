/** Renders a title so hyphenated words such as "E-Sports" are never split across two lines. */
export function Title({ text }: { text: string }) {
  return <>{text.split(/(\S+-\S+)/).map((part, index) => index % 2 ? <span className="nowrap" key={index}>{part}</span> : part)}</>;
}
