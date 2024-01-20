Folosește acest model pentru un proiect React ca punct de plecare pentru
aplicația ta. Este creat repository-ul goit-react-hw-02-feedback. La rularea
codului, nu există erori și avertismente în consolă. Pentru fiecare componentă
există un fișier separat în folder-ul src/components. Pentru toate componentele,
este descris propTypes. În timpul apelului, componentei i se transmit toate
datele pe care le așteaptă sub formă de props. Codul JS este curat și ușor de
înțeles, se folosește Prettier. Stilizarea este efectuată cu ajutorul CSS
modules.

# 1 - Feedback Widget

La fel ca majoritatea companiilor, cafeneaua Expresso colectează feedback de la
clienții săi. Sarcina ta este să creezi o aplicație pentru colectarea
statisticilor. Există doar trei tipuri de feedback: pozitiv, neutru și negativ.

# Pasul 1

Aplicația trebuie să afișeze numărul de recenzii colectate pentru fiecare
categorie. Aplicația nu trebuie să salveze statistici între sesiuni diferite
(refresh-ul paginii).

Starea aplicației trebuie să aibă următoarea formă, nu este permisă adăugarea
unor proprietăți noi:

```jsx
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
```

# Pasul 2

Extinde funcționalitatea aplicației, astfel încât, interfața să afișeze mai
multe statistici despre recenziile colectate. Afișează numărului total de
recenzii colectate din toate categoriile și procentul de recenzii pozitive.

Pentru aceasta, creează metodele auxiliare `countTotalFeedback()` și
`countPositiveFeedbackPercentage()`, care vor calcula aceste valori pe baza
datelor din state (date calculate).

# Pasul 3

Refactorizează aplicația. Starea aplicației trebuie să rămână în componenta root
`<App>`.

Mută afișarea statisticilor într-o componentă separată
`<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`. Mută
blocul de butoane în componenta
`<FeedbackOptions options={} onLeaveFeedback={}>`. Creează componenta
`<Section title="">`, care va randa o secțiune cu titlu și copii (children).
Adaugă componentele `<Statistics>` și `<FeedbackOptions>` în noua componentă.

# Pasul 4

Extinde funcționalitatea aplicației, astfel încât, blocul de statistici să fie
randat numai după ce a fost colectat cel puțin un feedback. Mută mesajul despre
absența statisticilor în componenta
`<Notification message="There is no feedback">`.
