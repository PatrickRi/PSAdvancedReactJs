import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', function () {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    },
    store: {
      lookupAuthor: jest.fn(() => ({})),
    }
  }

  it('should render correctly', function () {
    const tree = renderer.create(
      <ArticleList {...testProps}/>
    ).toJSON();

    expect(tree.children.length).toBe(2);

    expect(tree).toMatchSnapshot();
  });
});