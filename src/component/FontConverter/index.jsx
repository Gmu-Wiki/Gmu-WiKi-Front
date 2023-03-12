import React from 'react';
import * as S from './style';

export default function FontConverter({ children }) {
  return <S.ConvertFont>{children}</S.ConvertFont>;
}
