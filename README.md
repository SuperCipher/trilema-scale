# Trilema-scale

Blockchain trilemma in radar chart


<img width="740" alt="image" src="https://user-images.githubusercontent.com/6429197/170888404-fe992d2d-30d4-4391-927e-f4fb19f643b4.png">


# Goal

The increasing variety and quantity of distributed ledger technology make blockchain selection and adoption more time consuming.<br/>
The creator of this project tries to find a universal metric to compare common blockchain attributes in this case Scalability, Decentralization, and Security also known as the blockchain trilemma.<br/>
With these 3 key attributes creators try to rank and/or quantified these metrics as much as possible knowing that these metrics are far from perfect but at least give us some high-level comparison between vastly different technology and design philosophy system. <br/>
With that create a visualization that will help distinguish different systems apart.

# Evaluation criteria

*NOTE All of this bias toward existing technology, the upperbound might not be future proof.*
>TODO we gonna need some kind of ratio or coefficiant here later
### Scores
Scores range from 1 to 5, anything less than 1 is not permitted to create a centerline at 3.
### Scalability
Scalability analysis using relative comparison with prior data.<br/>
Scalability is defined as an ability to increase support more nodes, load, feature, Storage, and bandwidth without exponential incurring cost, latency, and no significant degradation in performance

- Scalability score at 1 if the least performance nodes (the bottleneck)  have comparable scalability to Bitcoin in 2020
- Scalability score at 3 if the least performance nodes (the bottleneck) in the chain scale linearly with cost
- Scalability score at 5 if the chain scale-like BFT permissioned node
### Security
>QUESTION can we make this a percentage
Security in terms of compromise for scalability and/or decentralization does not relate to software quality.
- Security score at 5 if chain requires more than 1/2 dishonest node to compromise both consistency and liveness of the network
- Security score at 4 if chain requires more than 1/2 dishonest node to compromise consistency or liveness of the network
- Security score at 3 if chain requires 1/3 dishonest node to compromise liveness of the network
- Security score at 2 if chain requires 1/3 dishonest node to compromise the consistency of the network
- Security score at 1 if chain requires 1/3 dishonest node to compromise both consistency and liveness of the network
### Decentralize
Network Consensus Provider (NCP) is a network participant that influences the consensus of the network
- Decentralize score at 1 if 100% NCP interest aligned
- Decentralize score at 3 if 50% of NCP interest aligned
- Decentralize score at 5 if 0% NCP interest aligned
