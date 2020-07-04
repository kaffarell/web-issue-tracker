import {Card, cards, addCard, removeCard, editCard} from '../src/Card';

describe('Testing functions on the cards', () => {
    test('Create Card without id', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('title', 'description');
        // Assert
        expect(cards[0].title).toBe('title');
        expect(cards[0].description).toBe('description');
        expect(cards[0].id).toBe(0);
    });
    test('Create Card with id', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('title', 'description', 45);
        // Assert
        expect(cards[0].title).toBe('title');
        expect(cards[0].description).toBe('description');
        expect(cards[0].id).toBe(45);
    });
    test('Create multiple Cards', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('title', 'description', 45);
        addCard('title1', 'description1');
        // Assert
        expect(cards[0].title).toBe('title');
        expect(cards[0].description).toBe('description');
        expect(cards[0].id).toBe(45);
        expect(cards[1].title).toBe('title1');
        expect(cards[1].description).toBe('description1');
        expect(cards[1].id).toBe(1);
    });
    test('Remove Card', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('test', 'description');
        removeCard(0);
        // Assert
        expect(cards.length).toBe(0);
    });
    test('Edit Card with all attributes', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('test', 'description', 45);
        editCard(45, 'test1', 'description1');
        // Assert
        expect(cards[0].title).toBe('test1');
        expect(cards[0].description).toBe('description1');
    });
    test('Edit Card with 1 attribute', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('test', 'description', 45);
        editCard(45, 'test1');
        // Assert
        expect(cards[0].title).toBe('test1');
        expect(cards[0].description).toBe('description');
    });
    test('Edit Card with no attribute', () => {
        // Setup
        cards.splice(0, cards.length);
        Card.numberOfCards = 0;
        addCard('test', 'description', 45);
        editCard(45);
        // Assert
        expect(cards[0].title).toBe('test');
        expect(cards[0].description).toBe('description');
    });
});