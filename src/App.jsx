import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="bg-green-600 md:bg-red-500 rounded-xl p-2" type="button">
        CLICA AQUI, EU SEI QUE VOCÊ QUER CLICAR
      </button>
      <form action="https://getform.io/f/bvrydqmb" method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        {/* add hidden Honeypot input to prevent spams */}
        <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
        {/* checkbox handle */}
        <input
          type="checkbox"
          name="subscribe"
          defaultValue="yes"
          defaultChecked=""
        />
        <input type="hidden" name="subscribe" defaultValue="no" />
        {/* radio button handle */}
        <input type="radio" name="gender" defaultValue="male" defaultChecked="" />
        <input type="radio" name="gender" defaultValue="female" />
        <input type="radio" name="gender" defaultValue="other" />
        {/* select field handle */}
        <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
        </select>
        <button type="submit">Send</button>
      </form>


      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
        <button class="infinite-rotate-on-hover backdrop-blur-md bg-white/30 border border-white/50 shadow-lg text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/50 hover:shadow-xl transition-all duration-300">
          Não clique ali. Clique Aqui
        </button>
      </a>

    </>
  )
}

export default App
