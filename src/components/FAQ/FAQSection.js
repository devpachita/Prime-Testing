import React, { useState } from 'react';
import styles from './FAQSection.module.css';

function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "TENGO ACCESO A TODA LA APLICACION?",
      answer: "NO, PUEDES VER EL CONTENIDO QUE OFRECE LA PAGINA SIN NECESIDAD DE INICIAR SESION O CREAR UNA CUENTA EN LA MISMA, JUNTO A UNA PEQUEÑA PRUEBA DE LAS FUNCIONES PREMIUM QUE TRAEN."
    },
    {
      question: "RECIBO ALGUNA OFERTA AL PROBAR DESDE ACA?",
      answer: "Es algo que tenemos que trabajar con las empresas, pero hay ciertas aplicaciones que si ofrecen esta funcion, puedes revisar ofertas o preubas gratis en la seccion de ofertas"
    },
    {
      question: "PUEDO PROPONER APLICACIONES O PAGINAS?",
      answer: "Si, aunque mientras se desarrolo un mejor metodo y mejor comunicaciones con las empresas, estas pueden tomar algun tiempo."
    },
    {
      question: "TIENE ANUNCIOS LA PAGINA?",
      answer: "Los anuncios seran solo promocion del contenido de algunas paginas y funciones extras."
    }
  ];

  return (
    <div className={styles['faq-section']}>
      <div className={styles['faq-content']}>
        <div className={styles['faq-header']}>
          <h1>ENCUENTRA LAS<br />RESPUESTAS QUE<br />NECESITAS</h1>
          
          <div className={styles['help-card']}>
            <h2>NECESITAS MAS AYUDA?</h2>
            <p>EXPLORA SUGERENCIAS Y GUÍAS PASO A PASO DISEÑADAS TANTO PARA USUARIOS NUEVOS COMO AVANZADOS.</p>
            <div className={styles['help-link-container']}>
              <a href="#" className={styles['help-link']}>CENTRO DE AYUDA</a>
              <span className={styles['arrow-icon']}>↗</span>
            </div>
          </div>
        </div>

        <div className={styles['faq-questions']}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles['faq-item']}>
              <button 
                className={styles['faq-button']}
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {faq.question}
                <span className={`${styles.arrow} ${openQuestion === index ? styles.up : ''}`}>
                  {openQuestion === index ? '∧' : '∨'}
                </span>
              </button>
              
              {openQuestion === index && (
                <div className={styles['faq-answer']}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
