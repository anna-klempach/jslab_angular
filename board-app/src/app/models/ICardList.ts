import ICard from './ICard';

export default interface ICardList {
    id: string,
    name: string,
    cards: ICard[],
}