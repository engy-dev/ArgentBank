import { mockAccounts, mockTransactions } from './mockData';


export const fetchAccounts = async (userId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          body: mockAccounts.filter((account) => account.userId == userId),
        },
      });
    }, 500);
  });
};


export const fetchTransactions = async (accountId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          body: mockTransactions.filter(
            (transaction) => transaction.accountId == accountId
          ),
        },
      });
    }, 500);
  });
};

export const fetchTransactionById = async (transactionId: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transaction = mockTransactions.find(
        (transaction) => transaction.transactionId === transactionId
      );
      if (transaction) {
        resolve({ data: { body: transaction } });
      } else {
        reject(new Error('Transaction not found'));
      }
    }, 500);
  });
};


export const updateTransaction = async (
  accountId: string,
  transactionId: string,
  updates: { category?: string; notes?: string }
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transactionIndex = mockTransactions.findIndex(
        (transaction) =>
          transaction.transactionId === transactionId &&
          transaction.accountId === accountId
      );
      if (transactionIndex !== -1) {
        const updatedTransaction = {
          ...mockTransactions[transactionIndex],
          ...updates,
        };
        mockTransactions[transactionIndex] = updatedTransaction;
        resolve({ data: { body: updatedTransaction } });
      } else {
        reject(new Error('Transaction not found'));
      }
    }, 500);
  });
};


export const deleteTransaction = async (
  accountId: string,
  transactionId: string
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transactionIndex = mockTransactions.findIndex(
        (transaction) =>
          transaction.accountId === accountId &&
          transaction.transactionId === transactionId
      );
      if (transactionIndex !== -1) {
        mockTransactions.splice(transactionIndex, 1);
        resolve({ data: { message: 'Transaction deleted successfully' } });
      } else {
        resolve({ data: { message: 'Transaction not found' } });
      }
    }, 500);
  });
};
