const Contacts = () => (
  <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>City, Russia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+78005553535">+7 (800) 555-35-357</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:i_dont_known@mail.ru">i_dont_known@mail.ru</a></p>
                </li>
            </ul>

    </div>
  </main>
);
 
export default Contacts;