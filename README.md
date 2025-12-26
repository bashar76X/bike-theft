# Bike Theft Reports – Munich

A React + TypeScript application that displays reported bike theft cases in the Munich area using the BikeIndex API.

The app focuses on clean architecture, performance, and clear handling of API constraints.

---

## Features

* Display a list of reported bike thefts in the Munich area
* Pagination with 10 cases per page
* Display total number of theft cases
* Search cases by title
* Responsive and modern UI
* Loading, error, and empty states

---

## Tech Stack

* React
* TypeScript
* Vite
* React Query (TanStack Query)
* Axios
* Zustand
* Tailwind CSS
* React Router

---

## API

Data is fetched from the public **BikeIndex API**:

* `GET /api/v3/search`

The search endpoint is used to retrieve reported stolen bikes based on proximity to Munich.

---

## Limitations & Technical Decisions

### Date range filtering

Date range filtering was intentionally not implemented.

Although the BikeIndex API exposes timestamps such as `date_stolen`, the `/search` endpoint does not reliably support filtering results by date range.
Implementing client-side filtering would require fetching a large dataset and filtering it locally, which would negatively impact performance and user experience.

---

### Case reported date

The reported date of a theft case is not included in the search response.

While this information can be retrieved via the `/bikes/{id}` endpoint, doing so would require an additional request per bike, resulting in an N+1 request pattern.
To keep the list performant and efficient, this data was intentionally omitted.

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Notes

This project was implemented as a technical assignment with an emphasis on code quality, API awareness, and real-world frontend architecture decisions.

_Last update: 26-12-2025
