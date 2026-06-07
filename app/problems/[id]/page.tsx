import Link from "next/link";
interface Problem {
  id: number;
  title: string;
  statement: string;
  approach: string;
  dryrun: string;
  complexity: string;
  cppCode: string;
}
const problems: Problem[]= [
  {
    id: 1,
    title: "Two Sum",
    statement: "Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to 'target'. You may assume that each input would have exactly one solution.",
    approach: "Use a Hash Map (unordered_map in C++) to store numbers and their indices as you iterate. For each number, calculate its complement (target - current_number). If the complement is already in the map, return its index and the current index. Otherwise, add the current number to the map.",
    dryrun: `Input: nums = [2, 7, 11, 15], target = 9

- i = 0: nums[0] = 2. Complement = 9 - 2 = 7. Map is empty. Add {2: 0} to map.
- i = 1: nums[1] = 7. Complement = 9 - 7 = 2. Map has '2' at index 0. Pairs found!
Output: [0, 1]`,
    complexity: "Time Complexity: O(n) - Single pass through the array.\nSpace Complexity: O(n) - To store elements in the hash map.",
    cppCode: `#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> numMap;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (numMap.find(complement) != numMap.end()) {
                return {numMap[complement], i};
            }
            numMap[nums[i]] = i;
        }
        return {};
    }
};`
  },
  {
    id: 2,
    title: "Reverse a Linked List",
    statement: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    approach: "Use an iterative three-pointer approach (prev, curr, and next). Iterate through the list, change the current node's next pointer to point to 'prev', and then shift 'prev' and 'curr' one step forward.",
    dryrun: `Input: 1 -> 2 -> 3 -> NULL
Initial: prev = NULL, curr = 1

- Step 1: next = 2; curr->next = NULL (1->NULL); prev = 1; curr = 2;
- Step 2: next = 3; curr->next = 1 (2->1->NULL); prev = 2; curr = 3;
- Step 3: next = NULL; curr->next = 2 (3->2->1->NULL); prev = 3; curr = NULL;
Output: 3 -> 2 -> 1 -> NULL`,
    complexity: "Time Complexity: O(n) - Traverses the list exactly once.\nSpace Complexity: O(1) - Done in-place with no extra memory allocated.",
    cppCode: `struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }
};`
  },
  {
    id: 3,
    title: "Valid Parentheses",
    statement: "Given a string 's' containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid based on bracket closure rules.",
    approach: "Use a Stack data structure. Traverse the string element by element. When encountering an opening bracket, push it onto the stack. When encountering a closing bracket, check if the stack is empty or if the top element matches the corresponding opening pair. If it matches, pop it; otherwise, the string is invalid.",
    dryrun: `Input: s = "()[]{}"

- i = 0: '(' -> Push to stack. Stack: ['(']
- i = 1: ')' -> Matches top '('. Pop stack. Stack: []
- i = 2: '[' -> Push to stack. Stack: ['[']
- i = 3: ']' -> Matches top '['. Pop stack. Stack: []
Output: true`,
    complexity: "Time Complexity: O(n) - Single pass sequentially across 'n' elements.\nSpace Complexity: O(n) - In the worst-case scenario where all elements are opening brackets.",
    cppCode: `#include <string>
#include <stack>

class Solution {
public:
    bool isValid(std::string s) {
        std::stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                if (c == ')' && st.top() != '(') return false;
                if (c == '}' && st.top() != '{') return false;
                if (c == ']' && st.top() != '[') return false;
                st.pop();
            }
        }
        return st.empty();
    }
};`
  },
  {
    id: 4,
    title: "Best Time to Buy and Sell Stock",
    statement: "You are given an array 'prices' where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve by buying on one single day and selling on a future day.",
    approach: "Maintain a tracking variable for the minimum price seen so far. For each price, compute the possible profit if sold today (current price - minimum price) and update the maximum profit discovered.",
    dryrun: `Input: prices = [7, 1, 5, 3, 6, 4]
Initial: minPrice = 7, maxProfit = 0

- Day 2 (Price 1): minPrice updates to 1. Profit = 1 - 1 = 0.
- Day 3 (Price 5): Profit = 5 - 1 = 4. maxProfit updates to 4.
- Day 4 (Price 3): Profit = 3 - 1 = 2. maxProfit stays 4.
- Day 5 (Price 6): Profit = 6 - 1 = 5. maxProfit updates to 5.
Output: 5`,
    complexity: "Time Complexity: O(n) - Only one loop passes through the list.\nSpace Complexity: O(1) - Constant storage markers used.",
    cppCode: `#include <vector>
#include <algorithm>

class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        int minPrice = 1e9; // Initialize with a very large number
        int maxProfit = 0;
        for (int i = 0; i < prices.size(); i++) {
            minPrice = std::min(minPrice, prices[i]);
            maxProfit = std::max(maxProfit, prices[i] - minPrice);
        }
        return maxProfit;
    }
};`
  },
  {
    id: 5,
    title: "Valid Anagram",
    statement: "Given two strings 's' and 't', return true if 't' is an anagram of 's', and false otherwise.",
    approach: "An anagram has the exact same character frequencies. Create a frequency array of size 26 initialized to 0. Increment counts based on string 's' positions, and decrement values based on string 't' positions. If all indices finish at 0, they are perfectly balanced anagrams.",
    dryrun: `Input: s = "anagram", t = "nagaram"

- String s increments 'a' by 3, 'n' by 1, 'g' by 1, 'r' by 1, 'm' by 1.
- String t decrements 'n' by 1, 'a' by 3, 'g' by 1, 'r' by 1, 'm' by 1.
- Final Array verification: All alphabet characters are perfectly matched at 0 count state.
Output: true`,
    complexity: "Time Complexity: O(n) - Single pass iteration check length strings.\nSpace Complexity: O(1) - Constant fixed size table array mapping (size 26).",
    cppCode: `#include <string>
#include <vector>

class Solution {
public:
    bool isAnagram(std::string s, std::string t) {
        if (s.length() != t.length()) return false;
        std::vector<int> count(26, 0);
        for (int i = 0; i < s.length(); i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }
        for (int val : count) {
            if (val != 0) return false;
        }
        return true;
    }
};`
  }
];
interface ProblemDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { id } = await params;
  const problem = problems.find((p) => p.id === parseInt(id));
  if (!problem) {
    return (
      <div className="min-h-screen pt-8 bg-gray-50 text-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Problem Not Found</h1>
        <Link href="/problems" className="text-amber-600 hover:underline font-semibold">
          &larr; Back to problems list
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white text-gray-900" >
           
      <h1 className="font-bold text-2xl py-5 flex align-items justify-center">{problem.id}.{problem.title}</h1>
      <div className="flex justify-center ">
      <div className=" max-w-4xl border-gray-500 px-10 py-10 shadow-lg shadow-amber-300 rounded-lg " >
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Problem Statement :- </h2>
            <p className="text-gray-700 leading-relaxed">{problem.statement}</p>
        </div>
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Approach</h2>
            <p className="text-gray-700 leading-relaxed">{problem.approach}</p>
        </div>
        <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Dry Run</h2>
            <p className="bg-blue-950 text-slate-100 font-mono text-sm p-4 rounded-md whitespace-pre-wrap leading-relaxed">{problem.dryrun}</p>
        </div>
        <div>
            <h2 className="bg-amber-50/50 border border-amber-200 rounded-md p-5">Complexity Analysis</h2>
            <p className="text-amber-950 font-medium whitespace-pre-line leading-relaxed">{problem.complexity}</p>
        </div>
        <div>
            <h2 text-lg font-bold text-slate-800 mb-2>Problem Code</h2>
            <pre className="bg-slate-950 text-emerald-400 font-mono text-sm p-5 rounded-md overflow-x-auto shadow-inner leading-relaxed"><code>{problem.cppCode}</code></pre>
        </div>
      </div>
     </div> 
    </div>
  );
}