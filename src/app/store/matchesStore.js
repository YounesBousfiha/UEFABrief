'use client';

import { create } from 'zustand';
import { fetchMatches, fetchMatchDetails } from '../lib/api';

export const useMatchesStore = create((set, get) => ({
  // State
  matches: [],
  loading: false,
  error: null,
  
  // Actions
  fetchMatches: async () => {
    // Return cached data if available
    if (get().matches.length > 0) {
      return get().matches;
    }
    
    set({ loading: true, error: null });
    
    try {
      const data = await fetchMatches();
      
      // Filter only Champions League matches
      const championsLeagueMatches = data.filter(match => 
        match.tournament?.name === 'UEFA Champions League' || 
        match.tournament?.uniqueTournament?.name === 'UEFA Champions League'
      );
      
      set({ 
        matches: championsLeagueMatches,
        loading: false 
      });
      
      return championsLeagueMatches;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to fetch matches',
        loading: false 
      });
      return [];
    }
  },
  
  fetchMatchDetails: async (matchId) => {
    set({ loading: true, error: null });
    
    try {
      const matchDetails = await fetchMatchDetails(matchId);
      
      // Update the match in the store with additional details
      set(state => {
        const updatedMatches = state.matches.map(match => 
          match.id === matchId ? { ...match, ...matchDetails } : match
        );
        
        return { 
          matches: updatedMatches,
          loading: false 
        };
      });
      
      return matchDetails;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to fetch match details',
        loading: false 
      });
      return null;
    }
  },
  
  getMatchById: (matchId) => {
    return get().matches.find(match => match.id === matchId) || null;
  },
  
  clearError: () => set({ error: null }),
}));