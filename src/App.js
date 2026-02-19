import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootSequence = [
      'INITIALIZING SECURITY PROTOCOL...',
      'LOADING CLASSIFIED DATA...',
      'ACCESSING RESTRICTED NETWORK...',
      'VERIFYING CREDENTIALS...',
      'ESTABLISHING SECURE CONNECTION...',
      'PROTOCOL ACTIVE',
      ''
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setTerminalText(prev => prev + bootSequence[index] + '\n');
        index++;
      } else {
        clearInterval(interval);
        setIsLoaded(true);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="scanlines"></div>
      <div className="noise"></div>
      
      {!isLoaded ? (
        <div className="boot-screen">
          <pre className="terminal">{terminalText}</pre>
        </div>
      ) : (
        <>
          <header className="header">
            <div className="header-content">
              <h1 className="main-title">
                <span className="blink">█</span> CLASSIFIED PROTOCOL <span className="blink">█</span>
              </h1>
              <div className="subtitle">SECURITY WARNING SYSTEM v2.0.1</div>
            </div>
          </header>

          <main className="main-content">
            {showContent && (
              <>
                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[01]</span>
                    <h2>OFFICIAL DISCLAIMER</h2>
                  </div>
                  <div className="content-box">
                    <p className="important-text">
                      <span className="alert">⚠ WARNING ⚠</span>
                    </p>
                    <p>
                      This document serves as an official statement regarding the Telegram user 
                      operating under the identifier <span className="highlight">OSINT4US</span>.
                    </p>
                    <p>
                      <span className="alert">OSINT4US HAS NO RELATIONSHIP WHATSOEVER</span> to the following 
                      illegal activities:
                    </p>
                    <ul className="crime-list">
                      <li>Doxxing (публикация персональных данных без согласия)</li>
                      <li>Swatting (ложные вызовы экстренных служб)</li>
                      <li>DDoS атаки</li>
                      <li>Взломы и несанкционированный доступ</li>
                      <li>Кража персональных данных</li>
                      <li>Киберсталкинг</li>
                      <li>Любые другие формы киберпреступлений</li>
                    </ul>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[02]</span>
                    <h2>LEGAL CONSEQUENCES</h2>
                  </div>
                  <div className="content-box">
                    <p className="important-text">
                      <span className="alert">⚠ CRIMINAL LIABILITY ⚠</span>
                    </p>
                    <p>
                      Все угрозы, попытки шантажа, распространение ложной информации и любые 
                      противоправные действия в отношении OSINT4US или связанных с ним лиц 
                      <span className="highlight"> НЕСУТ ПРАВОВЫЕ ПОСЛЕДСТВИЯ</span>.
                    </p>
                    <div className="legal-info">
                      <h3>Статьи Уголовного Кодекса РФ:</h3>
                      <ul>
                        <li><strong>Статья 272</strong> - Неправомерный доступ к компьютерной информации</li>
                        <li><strong>Статья 273</strong> - Создание, использование и распространение вредоносных программ</li>
                        <li><strong>Статья 274</strong> - Нарушение правил эксплуатации средств хранения, обработки или передачи компьютерной информации</li>
                        <li><strong>Статья 137</strong> - Нарушение неприкосновенности частной жизни</li>
                        <li><strong>Статья 138</strong> - Нарушение тайны переписки, телефонных переговоров, почтовых, телеграфных или иных сообщений</li>
                        <li><strong>Статья 119</strong> - Угроза убийством или причинением тяжкого вреда здоровью</li>
                        <li><strong>Статья 163</strong> - Вымогательство</li>
                        <li><strong>Статья 128.1</strong> - Клевета</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[03]</span>
                    <h2>INTERNATIONAL JURISDICTION</h2>
                  </div>
                  <div className="content-box">
                    <p>
                      Киберпреступления не имеют границ. Действия, совершенные в интернете, 
                      могут преследоваться по законам различных стран:
                    </p>
                    <ul>
                      <li><strong>Российская Федерация</strong> - Уголовный Кодекс РФ</li>
                      <li><strong>США</strong> - Computer Fraud and Abuse Act (CFAA)</li>
                      <li><strong>Европейский Союз</strong> - GDPR, Директива о кибербезопасности</li>
                      <li><strong>Международное право</strong> - Конвенция о киберпреступности (Будапештская конвенция)</li>
                    </ul>
                    <p className="important-text">
                      Все действия в сети <span className="highlight">ОСТАВЛЯЮТ ЦИФРОВЫЕ СЛЕДЫ</span> и могут быть 
                      отслежены правоохранительными органами.
                    </p>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[04]</span>
                    <h2>DIGITAL FORENSICS</h2>
                  </div>
                  <div className="content-box">
                    <p>
                      Современные методы цифровой криминалистики позволяют:
                    </p>
                    <ul>
                      <li>Определить IP-адреса и местоположение</li>
                      <li>Восстановить удаленные сообщения и файлы</li>
                      <li>Отследить транзакции криптовалют</li>
                      <li>Идентифицировать устройства и браузеры</li>
                      <li>Установить связи между аккаунтами</li>
                      <li>Получить данные от провайдеров и платформ</li>
                    </ul>
                    <p className="important-text">
                      <span className="alert">АНОНИМНОСТЬ В ИНТЕРНЕТЕ - МИФ</span>
                    </p>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[05]</span>
                    <h2>PLATFORM LIABILITY</h2>
                  </div>
                  <div className="content-box">
                    <p>
                      Платформы, включая Telegram, сотрудничают с правоохранительными органами 
                      и предоставляют данные по официальным запросам:
                    </p>
                    <ul>
                      <li>История сообщений и переписки</li>
                      <li>Метаданные (время, IP-адреса, устройства)</li>
                      <li>Информация о контактах</li>
                      <li>Файлы и медиа-контент</li>
                      <li>Данные о платежах и транзакциях</li>
                    </ul>
                    <p>
                      Все данные хранятся на серверах и могут быть извлечены в рамках 
                      расследования.
                    </p>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[06]</span>
                    <h2>PENALTIES AND SENTENCES</h2>
                  </div>
                  <div className="content-box">
                    <p className="important-text">
                      Уголовная ответственность за киберпреступления может включать:
                    </p>
                    <ul className="penalty-list">
                      <li>Штрафы до нескольких миллионов рублей</li>
                      <li>Лишение свободы от 2 до 7 лет (в зависимости от тяжести)</li>
                      <li>Ограничение свободы</li>
                      <li>Обязательные работы</li>
                      <li>Запрет на занятие определенной деятельностью</li>
                      <li>Конфискация имущества и технических средств</li>
                    </ul>
                    <p>
                      При отягчающих обстоятельствах (организованная группа, крупный ущерб) 
                      сроки лишения свободы могут достигать <span className="highlight">10 лет и более</span>.
                    </p>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[07]</span>
                    <h2>REPORTING PROCEDURES</h2>
                  </div>
                  <div className="content-box">
                    <p>
                      Все случаи угроз, шантажа, doxxing, swatting и других киберпреступлений 
                      должны быть зафиксированы и переданы в правоохранительные органы:
                    </p>
                    <ul>
                      <li><strong>МВД России</strong> - Управление "К" (киберпреступления)</li>
                      <li><strong>Следственный комитет РФ</strong></li>
                      <li><strong>Прокуратура РФ</strong></li>
                      <li><strong>ФСБ России</strong> (при угрозе государственной безопасности)</li>
                    </ul>
                    <p className="important-text">
                      Сохраняйте все доказательства: скриншоты, логи переписки, IP-адреса, 
                      временные метки.
                    </p>
                  </div>
                </section>

                <section className="warning-section">
                  <div className="section-header">
                    <span className="section-number">[08]</span>
                    <h2>FINAL STATEMENT</h2>
                  </div>
                  <div className="content-box">
                    <p className="important-text final-statement">
                      <span className="alert">OSINT4US НЕ ИМЕЕТ ОТНОШЕНИЯ</span> к любым формам 
                      киберпреступлений, включая doxxing, swatting, взломы, кражи данных и 
                      другие противоправные действия.
                    </p>
                    <p className="important-text final-statement">
                      Любые угрозы, попытки шантажа, распространение ложной информации или 
                      противоправные действия <span className="highlight">БУДУТ ПРЕСЛЕДОВАТЬСЯ ПО ЗАКОНУ</span>.
                    </p>
                    <p className="important-text final-statement">
                      Все действия в цифровом пространстве оставляют следы и могут быть 
                      использованы в качестве доказательств в суде.
                    </p>
                    <div className="footer-warning">
                      <p className="blink-text">
                        ████ ВНИМАНИЕ: ВСЕ ДЕЙСТВИЯ МОГУТ БЫТЬ ОТСЛЕЖЕНЫ И ПРЕСЛЕДОВАНЫ ПО ЗАКОНУ ████
                      </p>
                    </div>
                  </div>
                </section>
              </>
            )}
          </main>

          <footer className="footer">
            <div className="footer-content">
              <p>CLASSIFIED PROTOCOL v2.0.1</p>
              <p>SECURITY WARNING SYSTEM</p>
              <p className="timestamp">LAST UPDATE: {new Date().toLocaleString('ru-RU')}</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
