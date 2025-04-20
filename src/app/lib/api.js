/**
 * API service for fetching football match data from SofaScore
 */

// Base URL for SofaScore API
const API_BASE_URL = 'https://api.sofascore.com/api/v1';

/**
 * Fetches scheduled football events for a specific date
 * @param {string} date - Date in YYYY-MM-DD format (defaults to 2025-04-15 for Champions League quarter finals)
 * @returns {Promise<Array>} - Array of match data
 */
export const fetchMatches = async (date = '2025-04-15') => {
  try {
    // In a real application, we would make an actual API call
    // const response = await fetch(`${API_BASE_URL}/sport/football/scheduled-events/${date}`);
    // if (!response.ok) throw new Error('Failed to fetch matches');
    // const data = await response.json();
    // return data.events;
    
    // For development purposes, we'll return mock data
    return getMockMatches();
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};

/**
 * Fetches detailed information for a specific match
 * @param {number} matchId - The ID of the match
 * @returns {Promise<Object>} - Detailed match data
 */
export const fetchMatchDetails = async (matchId) => {
  try {
    // In a real application, we would make an actual API call
    // const response = await fetch(`${API_BASE_URL}/event/${matchId}`);
    // if (!response.ok) throw new Error('Failed to fetch match details');
    // const data = await response.json();
    // return data;
    
    // For development purposes, we'll return mock data
    return getMockMatchDetails(matchId);
  } catch (error) {
    console.error('Error fetching match details:', error);
    throw error;
  }
};

/**
 * Returns mock match data for development
 * @returns {Array} - Array of mock match data
 */
const getMockMatches = () => {
  return [
    {
      id: 11111,
      startTimestamp: 1713290400, // April 15, 2025, 20:00 UTC
      status: 'finished',
      homeTeam: {
        id: 2817,
        name: 'Real Madrid',
        shortName: 'Real Madrid',
        slug: 'real-madrid',
      },
      awayTeam: {
        id: 2672,
        name: 'Bayern Munich',
        shortName: 'Bayern',
        slug: 'bayern-munich',
      },
      homeScore: {
        current: 2,
        display: 2,
        period1: 1,
        period2: 1,
      },
      awayScore: {
        current: 1,
        display: 1,
        period1: 0,
        period2: 1,
      },
      tournament: {
        id: 7,
        name: 'UEFA Champions League',
        slug: 'uefa-champions-league',
      },
      venue: {
        id: 1456,
        name: 'Santiago Bernabéu',
        city: 'Madrid',
      },
    },
    {
      id: 22222,
      startTimestamp: 1713290400, // April 15, 2025, 20:00 UTC
      status: 'finished',
      homeTeam: {
        id: 2697,
        name: 'Manchester City',
        shortName: 'Man City',
        slug: 'manchester-city',
      },
      awayTeam: {
        id: 2818,
        name: 'Barcelona',
        shortName: 'Barcelona',
        slug: 'barcelona',
      },
      homeScore: {
        current: 3,
        display: 3,
        period1: 2,
        period2: 1,
      },
      awayScore: {
        current: 2,
        display: 2,
        period1: 1,
        period2: 1,
      },
      tournament: {
        id: 7,
        name: 'UEFA Champions League',
        slug: 'uefa-champions-league',
      },
      venue: {
        id: 1234,
        name: 'Etihad Stadium',
        city: 'Manchester',
      },
    },
    {
      id: 33333,
      startTimestamp: 1713376800, // April 16, 2025, 20:00 UTC
      status: 'finished',
      homeTeam: {
        id: 2702,
        name: 'Liverpool',
        shortName: 'Liverpool',
        slug: 'liverpool',
      },
      awayTeam: {
        id: 2693,
        name: 'Paris Saint-Germain',
        shortName: 'PSG',
        slug: 'paris-saint-germain',
      },
      homeScore: {
        current: 2,
        display: 2,
        period1: 1,
        period2: 1,
      },
      awayScore: {
        current: 0,
        display: 0,
        period1: 0,
        period2: 0,
      },
      tournament: {
        id: 7,
        name: 'UEFA Champions League',
        slug: 'uefa-champions-league',
      },
      venue: {
        id: 550,
        name: 'Anfield',
        city: 'Liverpool',
      },
    },
    {
      id: 44444,
      startTimestamp: 1713376800, // April 16, 2025, 20:00 UTC
      status: 'finished',
      homeTeam: {
        id: 2692,
        name: 'Juventus',
        shortName: 'Juventus',
        slug: 'juventus',
      },
      awayTeam: {
        id: 2679,
        name: 'Borussia Dortmund',
        shortName: 'Dortmund',
        slug: 'borussia-dortmund',
      },
      homeScore: {
        current: 1,
        display: 1,
        period1: 0,
        period2: 1,
      },
      awayScore: {
        current: 1,
        display: 1,
        period1: 1,
        period2: 0,
      },
      tournament: {
        id: 7,
        name: 'UEFA Champions League',
        slug: 'uefa-champions-league',
      },
      venue: {
        id: 1350,
        name: 'Allianz Stadium',
        city: 'Turin',
      },
    },
  ];
};

/**
 * Returns mock match details for development
 * @param {number} matchId - The ID of the match
 * @returns {Object} - Mock match details
 */
const getMockMatchDetails = (matchId) => {
  const matches = getMockMatches();
  const match = matches.find(m => m.id === matchId);
  
  if (!match) {
    throw new Error('Match not found');
  }
  
  // Add additional details to the match
  return {
    ...match,
    referee: {
      id: 12345,
      name: 'Anthony Taylor',
      nationality: 'England',
    },
    events: [
      {
        id: 1,
        minute: 23,
        type: 'Goal',
        player: match.id === 11111 ? 'Vinicius Jr.' : 
                match.id === 22222 ? 'Kevin De Bruyne' : 
                match.id === 33333 ? 'Mohamed Salah' : 'Federico Chiesa',
        team: match.homeTeam.name,
      },
      {
        id: 2,
        minute: 45,
        type: 'Yellow Card',
        player: match.id === 11111 ? 'Joshua Kimmich' : 
                match.id === 22222 ? 'Pedri' : 
                match.id === 33333 ? 'Marquinhos' : 'Marco Reus',
        team: match.awayTeam.name,
      },
      {
        id: 3,
        minute: 67,
        type: 'Goal',
        player: match.id === 11111 ? 'Jude Bellingham' : 
                match.id === 22222 ? 'Erling Haaland' : 
                match.id === 33333 ? 'Trent Alexander-Arnold' : 'Dusan Vlahovic',
        team: match.homeTeam.name,
      },
      {
        id: 4,
        minute: 78,
        type: 'Goal',
        player: match.id === 11111 ? 'Harry Kane' : 
                match.id === 22222 ? 'Robert Lewandowski' : 
                match.id === 33333 ? 'No goal' : 'Julian Brandt',
        team: match.awayTeam.name,
      },
      {
        id: 5,
        minute: 85,
        type: 'Substitution',
        player: match.id === 11111 ? 'Luka Modric (in) / Toni Kroos (out)' : 
                match.id === 22222 ? 'Phil Foden (in) / Jack Grealish (out)' : 
                match.id === 33333 ? 'Darwin Nunez (in) / Luis Diaz (out)' : 'Weston McKennie (in) / Manuel Locatelli (out)',
        team: match.homeTeam.name,
      },
    ].filter(event => !(event.type === 'Goal' && event.player === 'No goal')),
    statistics: {
      possessionPercentage: {
        home: match.id === 11111 ? 55 : match.id === 22222 ? 60 : match.id === 33333 ? 65 : 48,
        away: match.id === 11111 ? 45 : match.id === 22222 ? 40 : match.id === 33333 ? 35 : 52,
      },
      shots: {
        home: match.id === 11111 ? 15 : match.id === 22222 ? 18 : match.id === 33333 ? 14 : 10,
        away: match.id === 11111 ? 10 : match.id === 22222 ? 12 : match.id === 33333 ? 5 : 11,
      },
      shotsOnTarget: {
        home: match.id === 11111 ? 7 : match.id === 22222 ? 9 : match.id === 33333 ? 6 : 4,
        away: match.id === 11111 ? 4 : match.id === 22222 ? 5 : match.id === 33333 ? 1 : 3,
      },
      corners: {
        home: match.id === 11111 ? 8 : match.id === 22222 ? 7 : match.id === 33333 ? 9 : 5,
        away: match.id === 11111 ? 5 : match.id === 22222 ? 4 : match.id === 33333 ? 3 : 6,
      },
      fouls: {
        home: match.id === 11111 ? 10 : match.id === 22222 ? 8 : match.id === 33333 ? 9 : 12,
        away: match.id === 11111 ? 12 : match.id === 22222 ? 14 : match.id === 33333 ? 15 : 10,
      },
    },
    manOfTheMatch: match.id === 11111 ? {
      id: 12345,
      name: 'Vinicius Jr.',
      team: 'Real Madrid',
      imageUrl: null,
    } : match.id === 22222 ? {
      id: 23456,
      name: 'Kevin De Bruyne',
      team: 'Manchester City',
      imageUrl: null,
    } : match.id === 33333 ? {
      id: 34567,
      name: 'Mohamed Salah',
      team: 'Liverpool',
      imageUrl: null,
    } : null,
  };
};