import { useState } from 'react';
import { decode as atob, encode as btoa } from 'base-64'


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  let data = {
    
  }

  const [results, setResults] = useState(data);

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  const encrypted = '';
  let decrypted = '';

  function decrypt(encrypted) {
    decrypted = encrypted.btoa();
    console.log(decrypted);
    return decrypted;
  }


  // testing
  const [defaultBuy, setDefaultBuy] = useState({
    data: '',
    price: 0
  })

  const changeBuyPrice = (e) => {
    let value = e.target.value
    if (value > 1000) {
        value = 9000
    }
    console.log(value)
    setDefaultBuy({...defaultBuy, price: value})
  }


  return (
    <div>
      <Header title="Base64 Encoder / Decoder" />

      

      <div>
        <form>
          <label htmlFor="name" className="mb-2 italic">Encrypt</label>
          <br></br>
          <textarea
            id="plaintext"
            name="plaintext"
            cols="40"
            rows="5"
            onChange={changeBuyPrice}
          ></textarea>
          <textarea
            id="name2"
            value={btoa(defaultBuy.price)}
            name="name2"
            cols="40"
            rows="5"
            readOnly
          ></textarea>
          <br></br>
          <button onClick={handleClick}>Like ({likes})</button>
        </form>
      </div>
    </div>
  );
}
