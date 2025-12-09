import { index, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/layout.jsx", [
        index("routes/home.jsx"),
        route("doi-token", "routes/doi-token.jsx"),
        route("doi-gold-member", "routes/doi-gold-member.jsx"),
        route("how-It-works", "routes/how-It-works.jsx"),
        route("investment-finder", "routes/investment-finder.jsx"),
         route("investment-finder/:id", "routes/investment-finder-details.jsx"),
         route("sweepstakes", "routes/Sweepstakes.jsx"),
    ]),    
];
