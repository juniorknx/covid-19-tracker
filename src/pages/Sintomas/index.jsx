import '../Sintomas/style.scss';

export function Sintomas(){
    return(
        <section id="sintomas">
            <div className="sintomas-info">
                <h1>Quais são os sintomas?</h1>
                <article>
                   <ul>
                       <li>
                       Caso assintomático: caracterizado por teste laboratorial positivo para covid-19 e ausência de sintomas;
                       </li>

                       <li>
                       Caso leve: caracterizado a partir da presença de sintomas não específicos, como tosse, dor de garganta ou coriza, seguido, ou não, de perda de olfato e paladar, diarreia, dor abdominal, febre, calafrios, mialgia, fadiga e/ou cefaleia;
                       </li>

                       <li>
                       Caso moderado: os sintomas mais frequentes podem incluir desde sinais leves da doença, como tosse persistente e febre persistente diária, até sinais de piora progressiva de outro sintoma relacionado à covid-19 (fraqueza, prostração, falta de apetite, diarreia), além da presença de pneumonia sem sinais ou sintomas de gravidade;
                       </li>

                       <li>
                       Caso grave: considera-se a Síndrome Respiratória Aguda Grave (Síndrome Gripal que apresente dificuldade de respirar, desconforto respiratório ou pressão persistente no tórax ou saturação de oxigênio menor que 95% em ar ambiente ou coloração azulada de lábios ou rosto;
                       </li>

                       <li>
                       Para crianças, os principais sintomas incluem aceleração o ritmo respiratório, baixa saturação de oxigenação no sangue, desconforto respiratório, alteração da consciência, desidratação, dificuldade para se alimentar, coloração azulada, letargia, convulsões, recusa alimentar.
                       </li>

                       <li>
                       Caso crítico: os principais sintomas são sepse, síndrome do desconforto respiratório agudo, síndrome do desconforto respiratório agudo, insuficiência respiratória grave, disfunção de múltiplos órgãos, pneumonia grave, necessidade de suporte respiratório e internações em unidades de terapia intensiva.
                       </li>
                   </ul>
                </article>
            </div>
        </section>
    )
}