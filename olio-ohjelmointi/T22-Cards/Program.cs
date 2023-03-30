using System;
using System.Collections.Generic;

namespace CardGame
{
    class Card
    {
        public string Suit { get; }
        public string Value { get; }

        public Card(string suit, string value)
        {
            Suit = suit;
            Value = value;
        }

        public override string ToString()
        {
            return Value + " of " + Suit;
        }
    }

    class CardDeck
    {
        private List<Card> cards = new List<Card>();

        public CardDeck()
        {
            string[] suits = { "hearts", "diamonds", "clubs", "spades" };
            string[] values = { "Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2" };

            foreach (string suit in suits)
            {
                foreach (string value in values)
                {
                    Card card = new Card(suit, value);
                    cards.Add(card);
                }
            }
        }

        public void Shuffle()
        {
            Random rand = new Random();
            int n = cards.Count;
            while (n > 1)
            {
                n--;
                int k = rand.Next(n + 1);
                Card card = cards[k];
                cards[k] = cards[n];
                cards[n] = card;
            }
        }

        public override string ToString()
        {
            string deckString = "";
            foreach (Card card in cards)
            {
                deckString += card.ToString() + "\n";
            }
            return deckString;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            CardDeck deck = new CardDeck();
            Console.WriteLine("Deck before shuffling:\n" + deck.ToString());
            deck.Shuffle();
            Console.WriteLine("Deck after shuffling:\n" + deck.ToString());
        }
    }
}

