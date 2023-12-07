# Laravel Breeze - Next.js v14 Edition with TypeScript 🏝️
## Introduction

---
**This repository is a refactor of [breeze-next](https://github.com/laravel/breeze-next) by changing programing language from [JavaScript](https://www.javascript.com/) to [TypeScript](https://www.typescriptlang.org/)**

**This used NextJS Version 14**

### Little extras
* Add Formik Validation
* Next Features inside app folder
* Add Route Group

---

This repository is an implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Next.js frontend with a powerful Laravel backend.

## Official Documentation

### Installation

First, create a Next.js compatible Laravel backend by installing Laravel Breeze into a [fresh Laravel application](https://laravel.com/docs/installation) and installing Breeze's API scaffolding:

```bash
# Create the Laravel application...
laravel new next-backend

cd next-backend

# Install Breeze and dependencies...
composer require laravel/breeze --dev

php artisan breeze:install api
```

Next, ensure that your application's `APP_URL` and `FRONTEND_URL` environment variables are set to `http://localhost:8000` and `http://localhost:3000`, respectively.

After defining the appropriate environment variables, you may serve the Laravel application using the `serve` Artisan command:

```bash
# Serve the application...
php artisan serve
```

Next, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env.local` and supply the URL of your backend:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Finally, run the application via `npm run dev`. The application will be available at `http://localhost:3000`:

```
npm run dev
```

## License

Laravel Breeze Next.js v14 is open-sourced software licensed under the [MIT license](LICENSE.md).
