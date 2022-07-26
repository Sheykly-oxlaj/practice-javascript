################################################################################################################################################### # Problem 1:
# # Write a method that prints out every number from 1 to 100.

# number = 0

# def one_to_a_hundred
#   while number < 100
#     number = number + 1
#     puts number
#   end
# end

# or
# # def one_to_a_hundred
# # number = 1
# # 100.times do
# #   puts number
# #   number = number + 1
# #   # number +=1
# # end
# # end

##################################################################################################################################################
# # Problem 2:
# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# def one_to_a_hundred_odd
#   number = 1
# 50.times do
#   puts number
#   number = number + 2
#   # number +=2
# end
# end

##################################################################################################################################################
# Problem 3:
# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# array = [10, 15, 20, 25, 30, 55, 67, 55, 90]

# x = 0

# array.each do |number|
#   if number == 55
#     x = x + 1
#   end
# end
# p x

# # kay's method
# array = [10, 15, 20, 25, 30, 55, 67, 55, 90]

# puts array.select { |x| x == 55 }.length
# p x
##################################################################################################################################################
# Problem 4:
# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# strings = ["a", "b", "c", "d", "e"].flat_map { |x|[x, "awesomesauce"] }
# p strings
# code above works but don't want the last awesomesauce

strings = ["a", "b", "c", "d", "e"]
awesome = strings.flat_map { |x| [x, "awesomesauce"] }
awesome.delete_at(-1)
p awesome

##################################################################################################################################################
# Problem 5:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

##################################################################################################################################################
# Problem 6:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

##################################################################################################################################################
# Problem 7:
# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

##################################################################################################################################################
# Problem 8:
# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# // https://gist.github.com/peterxjang/8af18e52d1833ac642747587ccf26b02
