module.exports = {
  parser: '@typescript-eslint/parser', // ESLint가 TypeScript를 이해하고 분석할 수 있도록 하는 파서
  parserOptions: {
    ecmaVersion: 2020, // 최신 ECMAScript 기능을 사용하도록 설정
    sourceType: 'module', // ECMAScript 모듈을 사용할 수 있도록 설정
    ecmaFeatures: {
      jsx: true, // JSX 구문을 사용할 수 있도록 설정, 주로 React와 함께 사용
    },
  },
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지하여 해당 버전에 맞는 규칙을 적용
    },
  },
  extends: [
    'next/core-web-vitals', // Next.js에서 사용하는 Core Web Vitals 관련 규칙을 사용
    'plugin:react/recommended', // React에 대한 ESLint 추천 규칙 세트를 사용
    'plugin:@typescript-eslint/recommended', // TypeScript에 대한 ESLint 추천 규칙 세트를 사용
    'plugin:prettier/recommended', // Prettier와의 통합을 포함한 규칙 세트를 사용, Prettier 관련 규칙이 다른 규칙과 충돌하지 않도록 설정
  ],
  plugins: [
    'react', // React 관련 ESLint 플러그인
    'react-hooks', // React Hooks 관련 ESLint 플러그인
    '@typescript-eslint', // TypeScript 관련 ESLint 플러그인
    'prettier',
  ],
  rules: {
    // 사용자 정의 규칙
    'no-undef': 'error', // 선언되지 않은 변수를 사용할 때 에러를 발생시키도록 설정
    'react/react-in-jsx-scope': 'off', // React 17 이후로 JSX에서 import React from 'react';가 필요하지 않으므로 이 규칙을 끔
    'react/prop-types': 'off', // TypeScript를 사용하기 때문에 PropTypes를 사용하지 않으므로 이 규칙을 끔
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수와 클래스 메서드에 대해 명시적으로 반환 타입을 정의할 필요가 없도록 설정
  },
};
