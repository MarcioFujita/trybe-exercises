// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a útlima letra de uma string. A terceira deve receber três strings e concatená-las.

const exercise4 = require('./exercise4');
jest.mock('./exercise4');

describe('Testing new implementations', () => {
    it('should receive a value and return it in lower caps', () => {
      exercise4.firstFunction.mockImplementation(a => a.toLowerCase());
  
      expect(exercise4.firstFunction('BIG')).toBe('big');
      expect(exercise4.firstFunction).toHaveBeenCalled();
      expect(exercise4.firstFunction).toHaveBeenCalledTimes(1);
      expect(exercise4.firstFunction).toHaveBeenCalledWith('BIG');
    });
  
    it('should receive a value and return the last char of it ', () => {
      exercise4.secondFunction.mockImplementation(a => a.charAt(a.length - 1));
  
      expect(exercise4.secondFunction('big')).toBe('g');
      expect(exercise4.secondFunction).toHaveBeenCalled();
      expect(exercise4.secondFunction).toHaveBeenCalledTimes(1);
      expect(exercise4.secondFunction).toHaveBeenCalledWith('big');
    });
  
    it('should receive 3 values and concatenate', () => {
      exercise4.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));
  
      expect(exercise4.thirdFunction('b', 'i', 'g')).toBe('big');
      expect(exercise4.thirdFunction).toHaveBeenCalled();
      expect(exercise4.thirdFunction).toHaveBeenCalledTimes(1);
      expect(exercise4.thirdFunction).toHaveBeenCalledWith('b', 'i', 'g');
    });
  });
  