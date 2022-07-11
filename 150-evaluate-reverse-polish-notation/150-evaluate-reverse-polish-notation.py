class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        map = {'+': self.add, '-': self.subtract, '*': self.multiply, '/': self.divide}
        stack = []
        for token in tokens:
            if token in map:
                b = stack.pop()
                a = stack.pop()
                temp = map[token](a, b)
                stack.append(temp)
            else:
                stack.append(int(token))
        return stack[0]
    def add(self, a, b):
        return a + b
    def subtract(self, a, b):
        return a - b
    def multiply(self, a, b):
        return a * b
    def divide(self, a, b):
        return int(a / b)