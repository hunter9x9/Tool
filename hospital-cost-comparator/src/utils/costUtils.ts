// This file contains utility functions for calculating and comparing costs.

export const calculateTotalCost = (costs: number[]): number => {
    return costs.reduce((total, cost) => total + cost, 0);
};

export const compareCosts = (costA: number, costB: number): string => {
    if (costA < costB) {
        return 'Cost A is cheaper';
    } else if (costA > costB) {
        return 'Cost B is cheaper';
    } else {
        return 'Both costs are the same';
    }
};