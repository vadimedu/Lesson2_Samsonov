export const MessageList = ({ messages }) => {
    return  <ul>
        {messages.map((m, idx) => {
         return <li key = {idx}>
                {m.author}: {m.text}
            </li>
        })}
    </ul>
}
