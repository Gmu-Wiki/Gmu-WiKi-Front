import React from 'react';
import * as S from './style';

export default function FontConverter({ children, fontSize = '16px' }) {
  return <S.ConvertFont fontSize={fontSize}>{children}</S.ConvertFont>;
}
