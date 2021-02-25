const Faq = () => {
  const toogle = (e) => {
    console.log(e.target)
    var acc = e.target
    var panel = acc.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
      panel.style.fontSize = 'initial'
    } else {
      panel.style.display = 'block'
    }
  }
  return (
    <div>
      <div className='values'>
        <h2>Faq</h2>
      </div>
      <div className='container'>
        <h2>ORDINI E REGISTRAZIONE</h2>
        <button onClick={toogle} className='accordion'>Come si effettua un ordine?</button>
        <div className='panel'>
          <p>Fare un ordine su Olivia’ Choice è semplicissimo! Scegli fra i prodotti disponibili su oliviaschoiche.it navigando tra le categorie del menu.</p>
          <p>- Scegli gli articoli che vuoi comprare cliccando su «Aggiungi al carrello». </p>
          <p>- Ora lasciati guidare dalle istruzioni e clicca su «Vai alla Cassa» / «Checkout».</p>
          <p>In fase di checkout potrai inserire i tuoi dati personali ed i dati di pagamento per finalizzare l’ordine.</p>
        </div>

        <button onClick={toogle} className='accordion'>È obbligatorio registrarsi sul sito per effettuare un ordine?</button>
        <div className='panel'>
          <p>No, su Olivia’s choice puoi acquistare senza necessità di registrati rendendo il tuoshoppingancora piùveloce.</p>
          <p><strong>Se deciderai di registrarti, avrai tanti vantaggi che ti aiuteranno negli ordini successivi:</strong></p>
          <p>- il tuo profilo utente, che ti consente di effettuare rapidamente gli ordini;</p>
          <p>- la modifica dei dati e l'aggiunta di più indirizzi per la fatturazione e la spedizione;</p>
          <p>- l’iscrizione personalizzata alla newsletter per ricevere aggiornamenti e promozioni utili.</p>
          <p>L’account può essere tranquillamente eliminato in futuro.</p>
        </div>

        <button onClick={toogle} className='accordion'>Posso fare un ordine telefonico?</button>
        <div className='panel'>
          <p>Ci dispiace, noi di Olivia’s Choice accettiamo <strong>solo ordini online</strong></p>
        </div>
        <button onClick={toogle} className='accordion'>Posso modificare/annullare un ordine già inviato?</button>
        <div className='panel'>
          <p>Dopo che un ordine è stato concluso e inviato non è più possibile annullarlo o modificarlo.</p>
        </div>
        <button onClick={toogle} className='accordion'>È possibile richiedere una confezione regalo?</button>
        <div className='panel'>
          <p>Ci dispiace, al momento non offriamo questo servizio.</p>
        </div>
        <button onClick={toogle} className='accordion'>Come posso verificare se il mio ordine è andato a buon fine?</button>
        <div className='panel'>
          <p>Se hai concluso correttamente un ordine dovresti aver ricevuto una mail di conferma edi riepilogo da parte di oliviaschoice.italla casella di posta elettronica che hai inserito. Verifica che l’email non sia finita per errore nella casella spam. Se non hai ricevuto l’email di conferma, chiedi maggiori informazioni al nostro ServizioClienti inviando un’email a <strong>ordini@difar.it </strong>.</p>
        </div>
        <button onClick={toogle} className='accordion'>Come viene garantita la mia privacy?</button>
        <div className='panel'>
          <p>Tutti i dati raccolti attraverso il sito oliviaschoice.it vengono trattati ai sensi del D.lgs. del 10 agosto 2018 n. 101 e del Regolamento europeo (UE) 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.In qualsiasi momento, in caso di domande, obiezioni e richieste circa le modalità attraverso cui raccogliamo e trattiamo i dati personali, potete contattare il nostro Servizio Clienti all’indirizzo<strong> e-mailprivacy@difar.it </strong></p>
          <p>Puoi consultare la sezione privacy policyper ulteriori informazioni.</p>
        </div>
        <button onClick={toogle} className='accordion'>Non voglio più ricevere newsletter, come cancello la mia iscrizione?</button>
        <div className='panel'>
          <p>Puoi annullare l'iscrizione alla newsletter Olivia’s Choice in due modi:</p>
          <p>- in fondo all'ultima email ricevuta, clicca sul link “Unsubscribe from this list”;</p>
          <p>- inviando un’email all’indirizzo <strong>privacy@difar.it</strong></p>
          <p>Puoi consultare la sezione privacy policyper ulteriori informazioni.</p>
        </div>
        <br />
        <h2>PAGAMENTI</h2>
        <button onClick={toogle} className='accordion'>Quali metodi di pagamento accettate?</button>
        <div className='panel'>
          <p>Su Olivia’s Choice puoi procedere al pagamento degli ordini tramite Carta di credito oppure optare per il Pagamento alla consegna</p>
        </div>
        <button onClick={toogle} className='accordion'>Le transazioni effettuate con la carta di credito sono sicure?</button>
        <div className='panel'>
          <p>Utilizziamo il servizio di pagamento sicuro che prevede l’utilizzo del protocollo di sicurezza SSL. I dati riservati della carta di sono criptati e così trasmessi al gestore dei pagamenti. Il nostro Sito non ha mai accesso e non memorizza i dati della carta di credito utilizzata per il pagamento dei prodotti. Tutte le informazioni di pagamento sono criptate per garantirti il massimo grado di privacy. Per maggiori informazioni consulta la privacy policy.</p>
        </div>
        <button onClick={toogle} className='accordion'>Posso pagare alla consegna?</button>
        <div className='panel'>
          <p>Sì, è possibile pagare al momento della consegna, esclusivamente in contanti. Il pagamento in Contrassegno comporta un supplemento al costo della spedizione di 4,90 euro per la gestione del pagamento da parte del Corriere. Per agevolare la consegna assicurati di poter pagare l'importo esatto dell’ordine in contanti, perché i Corrieri non sono tenuti ad avere resto a disposizione.</p>
        </div>
        <br />
        <h2>CONSEGNE</h2>
        <button onClick={toogle} className='accordion'>Quando verrà spedito il mio ordine?</button>
        <div className='panel'>
          <p>Il tuo ordine viene spedito dal nostro magazzino, il giorno stesso o l'indomani, a seconda dell'ora in cui abbiamo ricevuto l’ordine.</p>
          <p>Per gli ordini effettuati dallunedì al venerdì il tempo massimo previsto per spedire iltuo ordine è solitamente un giorno lavorativo per la preparazione. </p>
          <p>Se l’ordine viene effettuato di Sabato e/o Domenica, andrà in preparazione il lunedì successivo.</p>
          <p>I nostri uffici di resteranno chiusi nei giorni di festività nazionale: 1°Gennaio, 6 Gennaio, Pasqua e Lunedì dell'Angelo, 25 Aprile, 1°Maggio, 2 Giugno, 15 Agosto, 1° Novembre, 8 Dicembre, 25 Dicembre, 26 Dicembre.</p>
          <p />

        </div>
        <button onClick={toogle} className='accordion'>Entro quanti giorni consegnate?</button>
        <div className='panel'>
          <p>Dal momento della presa in carico da parte del Corriere, la consegna avverrà entro 72/96 ore in tutta Italia.</p>
        </div>
        <button onClick={toogle} className='accordion'>Consegnate anche all’estero?</button>
        <div className='panel'>
          <p>No, attualmente il nostro servizio di spedizione è riservato solo al territorio nazionale ,non consegniamo all’estero</p>
        </div>
        <button onClick={toogle} className='accordion'>Effettuate consegne nei giorni festivi?</button>
        <div className='panel'>
          <p>Non è prevista la consegna degli ordini durante il fine settimana (Sabato e Domenica) e nei giorni di festività nazionale: 1°Gennaio, 6 Gennaio, Pasqua e Lunedì dell'Angelo, 25 Aprile, 1°Maggio, 2 Giugno, 15 Agosto, 1° Novembre, 8 Dicembre, 25 Dicembre, 26 Dicembre.</p>
          <p>Puoi tracciare il tuo ordine, controllando il tracking, per avere i dettagli sulla consegna.</p>
        </div>
        <button onClick={toogle} className='accordion'>Qual è la soglia minima per avere la spedizione standard gratuita?</button>
        <div className='panel'>
          <p>Per ordini pari o superiori a 39,90€ la spedizione standard è gratuita, per ordini di importo inferiore ti verrà addebitato il sovrapprezzo 4,90€</p>

        </div>
        <button onClick={toogle} className='accordion'>È possibile tracciare la spedizione del mio ordine?</button>
        <div className='panel'>
          <p>Certo, basta cliccare sul numero di tracking che ti abbiamo inviato nella mail di “conferma spedizione”.</p>
        </div>
        <button onClick={toogle} className='accordion'>E se la merce arriva danneggiata?</button>
        <div className='panel'>
          <p>Siamo spiacenti se durante il trasporto si è danneggiato un prodotto. Se al momento della consegna il pacco si presenta già danneggiato e/o presenta macchie esterne provocate da prodotti liquidi, non accettarlo e contatta immediatamente il Servizio Clienti di Olivia’s Choice all’email ordini@difar.it.Se dovessi accorgerti del danno ai prodotti quando ormai il pacco è già consegnato, puoi effettuare una richiesta di Rimborso per prodotto danneggiato scrivendo al nostroServizio Clienti ordini@difar.it. Per consentirci di elaborare rapidamente la segnalazione ti raccomandiamo di allegare fotografie del pacco e/o della merce danneggiata.</p>
          <p>Per maggiori informazioni consultare l’Articolo 8 – Difetti, non conformità e danni ai prodotti delle Condizioni Generali di Vendita.</p>
        </div>
        <button onClick={toogle} className='accordion'>Cosa succede se il Corriere non mi trova in casa al momento della consegna?</button>
        <div className='panel'>
          <p>In caso di tua assenza al passaggio del corriere GLS, riceverai un'email a notificarti che il pacco si trova nella sede GLS più vicina. Avrai 5 giorni per concordare una nuovaconsegna con il Corriere, altrimenti il pacco resterà fermo in deposito presso la sede diGLS più vicina fino ad un intervento.</p>
          <p>Per qualsiasi informazione aggiuntiva e supporto, puoi contattare il Servizio Clienti Olivia’s Choice inviando una email a ordini@difar.it.</p>
        </div>
        <h2>RESI E RIMBORSI</h2>
        <button onClick={toogle} className='accordion'>Posso restituire un prodotto se ho cambiato idea?</button>
        <div className='panel'>
          <p>Puoi in qualsiasi momento esercitate il Diritto di recesso sull’ordine effettuato. Sarà sufficiente, entro 14 giorni dal ricevimento della merce, inviare una email ad ordini@difar.it comunicando i dati necessari o inviando il modulo di recesso tipo, che troverai nelle Condizioni generali di Vendita.</p>
          <p>In questo caso, l'utente può usare qualsiasi metodo di spedizione a sua scelta. Il pagamento del trasporto è a carico dell'utente.</p>
          <p>Olivia’s choice accetterà la merce resa riservandosi ogni rimborso solo previa verifica che i prodotti siano stati riconsegnati nel loro stato d’origine, non utilizzati e con il packaging originale integro. Al ricevimento del pacco, lo verificheremo e se non è stato danneggiato ti rimborseremo per il pieno valore dell’ordine. Per tutte le condizioni applicabili e per maggiori informazioni consulta l’Articolo 9 – Recesso delleCondizioni generali di Vendita</p>

        </div>
        <button onClick={toogle} className='accordion'>Il reso è gratuito?</button>
        <div className='panel'>
          <p>Se hai deciso di applicare il diritto di recesso il costo della restituzione di uno o più prodotti è a tuo carico. I prodotti acquistati dovranno essere integri e restituiti nell'imballo originale, completi in tutte le loro parti (compresi il foglietto illustrativo, eventuali gadget omaggio e altri elementi). Poiché le modalità e spese di spedizione del reso sono a tuo carico, potrai spedirlo con qualsiasi metodo di spedizione tracciabile a tua scelta. Fino all’avvenuto ricevimento in magazzino, la spedizione del reso è sotto tua completa responsabilità.</p>

        </div>
        <button onClick={toogle} className='accordion'>Ho ricevuto un prodotto errato, cosa fare?</button>
        <div className='panel'>
          <p>Ci scusiamo per l’inconveniente. Se hai ricevuto un articolo errato nella spedizione, ti preghiamo di contattarci via e-mail all’indirizzo ordini@difar.it e il nostro servizio clienti ti assisterà per il reso o la sostituzione. Non ti verranno addebitate spese di spedizione per eventuali errori commessi durante la preparazione della spedizione da parte nostra.</p>

        </div>
        <button onClick={toogle} className='accordion'>Ho ricevuto un prodotto difettoso, cosa fare?</button>
        <div className='panel'>
          <p>Tutti i prodotti venduti su Olivia’s Choice sono coperti dalla garanzia legale minima di 24 mesi per i difetti di conformità. Per usufruire dell’assistenza in garanzia ti preghiamo di contattarci via e-mail all’indirizzo ordini@difar.it, e ti raccomandiamo di conservare la Fattura o Ricevuta Fiscale che riceverai insieme ai prodotti acquistati.In caso di difetto di un prodotto, hai diritto al ripristino, senza spese aggiuntive, della conformità del bene mediante riparazione o sostituzione.</p>
          <p>Per tutte le condizioni applicabili e per maggiori informazioni consulta l’Articolo 8 – Difetti, non conformità e danni ai prodotti delle Condizioni generali di Vendita</p>
        </div>
        <button onClick={toogle} className='accordion'>Con quale metodo di pagamento riceverò il rimborso?</button>
        <div className='panel'>
          <p>Se hai effettuato una richiesta di rimborso per Recesso ed è stata accettata, l'importo del reso ti sarà rimborsato tramite:</p>
          <p>- Bonifico Bancario se avevi acquistato tramite Contrassegno. In questo caso ti sarà richiesto via email di indicare le coordinate bancarie verso le quali desideri che venga effettuato il rimborso.</p>
          <p>- se l’acquisto è stato effettuato tramite Carta di Credito ti verrà riaccreditato l’importonella tua carte di credito entro 5 giorni lavorativi.</p>
        </div>
      </div>
      <style jsx>{`
      .values {
          margin-top: 140px;
          padding: 40px 10px 60px;
          background-color: #8c2b2f;
          text-align: center;
      }
      .values h2  {
          color: #fff
      } 
      .values h3{
          color: #fff !important;
          font-weight: 600
      }
        .accordion {
        background-color: #fff;
        color: #222;
        cursor: pointer;
        padding: 16px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-weight: 500;
        font-size: 18px;
        transition: 0.4s;
      }

      h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      
     
      
      .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
      }
      @media(min-width:901px){
        .values {
            padding: 60px 80px 80px;
            margin: 120px 85px 0;
            border-radius: 4px;
            margin-bottom: 40px;
            box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
        }
        .container{
          margin: 40px 85px 120px;
        }
      }
        `}
      </style>
    </div>
  )
}
export default Faq
