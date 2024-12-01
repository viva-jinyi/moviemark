src/
├── app/
│   ├── example/
│   │   └── theme/
│   │       └── page.tsx
│   │   └── toastMessage/
│   │       └── page.tsx
│   └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── LoginForm/
│   │   │   ├── LoginForm.tsx
│   │   │   └── useLoginForm.ts
│   │   └── SignUpForm/
│   │       ├── SignUpForm.tsx
│   │       └── useSignUpForm.ts
│   │
│   ├── common/
│   │   ├── Button/
│   │   │   ├── BaseButton.tsx
│   │   │   ├── IconButton.tsx
│   │   │   └── styles.ts
│   │   ├── Icons/
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── BaseInput.tsx
│   │   │   ├── PasswordInput.tsx
│   │   │   ├── TextArea.tsx
│   │   │   └── TextInput.tsx
│   │   ├── Modal/
│   │   │   └── BaseModal.tsx
│   │   └── ToastMessage/
│   │       └── ToastMessageItem.tsx
│   │
│   └── support/
│       └── SupportModal.tsx
│
├── providers/
│   └── ThemeProvider.tsx
│   └── ToastMessageProvider.tsx
│
└── types/
    ├── button.d.ts
    ├── input.d.ts
    └── toastMessage.d.ts