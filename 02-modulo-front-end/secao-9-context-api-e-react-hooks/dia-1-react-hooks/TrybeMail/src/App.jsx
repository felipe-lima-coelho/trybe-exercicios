import { useEffect, useState } from "react";
import messagesList from "./data/messagesList";

function App() {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    setEmailList([...messagesList])
  }, []);

  const handleOnCLickChangeAllEmailsRead = () => {
    const copyEmailList = [...emailList];
    copyEmailList.forEach((email) => {
      email.status = 1;
    });

    setEmailList(copyEmailList)
  };

  const handleOnCLickChangeAllEmailsUnead = () => {
    const copyEmailList = [...emailList];
    copyEmailList.forEach((email) => {
      email.status = 0;
    });

    setEmailList(copyEmailList)
  };

  const handleOnClickCHandeStatusEmail = (msgStatus, email) => {
    const indexOfEmail = emailList
      .findIndex((emailObj) => emailObj.id === email.id);
    const copyEmailList = [...emailList];
    
    if (msgStatus === 'Mark email as read') {
      copyEmailList[indexOfEmail].status = 1;
    }
    if (msgStatus === 'Mark email as unread') {
      copyEmailList[indexOfEmail].status = 0;
    }

    setEmailList(copyEmailList);
  };

  useEffect(() => {
    const isAllEmailRead = emailList.every((email) => email.status === 1);

    if (emailList.length > 0 && isAllEmailRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [emailList]);

  return (
    <section>
      <div>
        <button
          onClick={ handleOnCLickChangeAllEmailsRead }
        >
          Marcar Todos Emails Como Lidos
        </button>

        <button
          onClick={ handleOnCLickChangeAllEmailsUnead }
        >
          Marcar Todos Emails Como Não Lidos
        </button>
      </div>
      {
        emailList.map((email) => (
          <div key={ email.id }>
            {
              email.status === 0 ? (
                <p><strong>{ email.title }</strong></p>
              ) : (
                <p>{ email.title }</p>
              )
            }
            <button
              onClick={
                () => handleOnClickCHandeStatusEmail('Mark email as read', email)
              }
            >
              Marcar Como Lida
            </button>
            <button
              onClick={
                () => handleOnClickCHandeStatusEmail('Mark email as unread',email)
              }            
            >
              Marcar Como Não Lida
            </button>
          </div>
        ))
      }
    </section>
  )
}

export default App;
