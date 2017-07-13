/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import Dictionary from './index';

describe('Dictionary', () => {
  describe('Some simple test', () => {
    describe('findMostSimilar test 1', () => {
      const words = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'];
      it('should return "strawberry"', () => {
        const matcher = new Dictionary(words);
        expect(matcher.findMostSimilar('strawbery')).to.be.equal('strawberry');
      });
      it('should return "berry"', () => {
        const matcher = new Dictionary(words);
        expect(matcher.findMostSimilar('strawbery')).to.be.equal('cherry');
      });
    });
    describe('findMostSimilar test 1', () => {
      const words = ['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript'];
      it('should return "java"', () => {
        const matcher = new Dictionary(words);
        expect(matcher.findMostSimilar('heaven')).to.be.equal('java');
      });
      it('should return "javascript"', () => {
        const matcher = new Dictionary(words);
        expect(matcher.findMostSimilar('javascript')).to.be.equal('javascript');
      });
    });
  });
});
