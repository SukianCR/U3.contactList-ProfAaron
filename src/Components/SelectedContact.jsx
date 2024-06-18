import { useEffect, useState } from "react";

export default function SelectedContact({
  setSelectedContactId,
  selectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getContact() {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const result = await response.json();
      console.log(result);
      setContact(result);
    }

    getContact();
  }, []);

  return (
    <>
      <div className="container">
        <h2>{contact?.name?.toUpperCase()}</h2>

        <div className="table-responsive">
          <table className="table table-hover">
            <tbody>
              <tr className="messageC">
                <td className="messageC">
                  <span className="message">Username:</span>
                </td>
                <td>{contact?.username}</td>
              </tr>
              <tr className="messageC">
                <td className="messageC">
                  <span className="message">Email:</span>
                </td>
                <td>{contact?.email}</td>
              </tr>
              <tr className="messageC">
                <td className="messageC">
                  <span className="message">Website:</span>
                </td>
                <td>{contact?.website}</td>
              </tr>
              <tr className="messageC">
                <td className="messageC">
                  <span className="message">Address:</span>
                </td>
                <td>
                  <ul>
                    <li className="list-group-item ">
                      {contact?.address?.street +
                        ", " +
                        contact?.address?.suite}
                    </li>

                    <li className="list-group-item ">
                      {contact?.address?.city +
                        ", " +
                        contact?.address?.zipcode}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="messageC">
                <td>
                  <span className="message">Company:</span>
                </td>
                <td>
                  <ul>
                    <li className="bold list-group-item ">
                      {" "}
                      {contact?.company?.name}
                    </li>
                    <li className="list-group-item ">
                      {contact?.company?.catchPhrase}
                    </li>
                    <li className="list-group-item ">
                      {contact?.company?.bs}{" "}
                    </li>
                  </ul>
                </td>
              </tr>
             
            </tbody>
          </table>
          <button
                    className="btn btn-primary "
                    onClick={() => setSelectedContactId(null)}
                  >
                    Go Back
                  </button>
        </div>
      </div>
    </>
  );
}
