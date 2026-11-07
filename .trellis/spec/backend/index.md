# Backend Development Guidelines

## Not applicable

This project has **no backend**: it is a static catalog site. Orders are sent by the
customer through WhatsApp (`wa.me` deep links built in `js/app.js`). There is no
database, API, logging or server-side error handling.

If a backend is ever added (for example a stock API or a checkout), fill the files in this
folder before writing it. Until then the other files here stay as templates and must not
be loaded into task context.
