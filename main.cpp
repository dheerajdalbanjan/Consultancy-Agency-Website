#include <iostream>
#include <vector>
#include <algorithm>
#include <utility>

using namespace std;

bool isValidPosition(int index, int value, const vector<pair<int, int>>& constraints) {
    int pos = value - 1; 
    return index >= constraints[pos].first && index <= constraints[pos].second;
}

int minSwaps(vector<int>& nums, vector<pair<int, int>>& constraints) {
    int n = nums.size();
    vector<pair<int, int>> arrPos(n);
    for (int i = 0; i < n; i++) {
        arrPos[i] = make_pair(nums[i], i);
    }

    
    sort(arrPos.begin(), arrPos.end());

    vector<bool> visited(n, false);
    int swaps = 0;

    for (int i = 0; i < n; i++) {
        if (visited[i] || arrPos[i].second == i) {
            continue;
        }

        int cycle_size = 0;
        int j = i;
        while (!visited[j]) {
            visited[j] = true;

            if (!isValidPosition(j, arrPos[j].first, constraints)) {
                return -1;
            }

            j = arrPos[j].second;
            cycle_size++;
        }

        if (cycle_size > 0) {
            swaps += (cycle_size - 1);
        }
    }

    return swaps;
}

int main() {
    int N;
    cin >> N;
    vector<int> nums(N);
    for (int i = 0; i < N; i++) {
        cin >> nums[i];
    }
    vector<pair<int, int>> constraints(N);
    for (int i = 0; i < N; i++) {
        cin >> constraints[i].first >> constraints[i].second;
    }

    int result = minSwaps(nums, constraints);
    cout << result << endl;

    return 0;
}
