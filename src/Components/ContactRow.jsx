export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      className="messageC"
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className="greenLine">{contact.name}</td>
      <td className="greenLine">{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
