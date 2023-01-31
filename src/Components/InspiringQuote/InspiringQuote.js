import { useEffect, useState } from "react";

const quotes = [
    '"Nawet najdalszą podróż zaczyna się od pierwszego kroku."',
    '"Podróżować to żyć."',
    '"Człowiek nie może odkryć nowych oceanów, dopóki nie znajdzie odwagi żeby stracić z oczu brzeg."',
    '"Świat jest książką i ci, którzy nie podróżują, czytają tylko jedną stronę."'
]

const styles = {
    position: 'absolute',
    top: '20px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff'
};

function InspiringQuote(props) {
    const [quote, setQuote] = useState('Wczytywanie cytatów...')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random()  * quotes.length)])
    }, [loading])

    return (
        <p style={styles}>{quote}</p>
    )
}

export default InspiringQuote