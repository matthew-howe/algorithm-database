#include <iostream>
#include <vector>

std::vector<int> maps(const std::vector<int> &values)
{
    std::vector<int> nums;

    for (auto a : values)
    {
        nums.push_back(a * 2);
    }

    return nums;
}

int main()
{
    std::vector<int> n;

    for (int i = 0; i < 5; i++)
    {
        n.push_back(i);
    }

    std::vector<int> k = maps(n);

    for (int i = 0; i < 5; i++)
    {
        std::cout << k[i] << std::endl;
    }
}