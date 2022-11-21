# congress-finance

This chart represents campaign donations of $1000 or more to candidates for office in the 2022 US Midterms.

The source data was crawled from opensecrets.org, an independent nonprofit whose mission is to "track the flow of money in American politics and provide the data and analysis to strengthen democracy."

Congress members are responsible for reporting this data, and those who chose not to are not represented here. In addition, the most recent publicly available report was used in each case, so some data may be out of date.

Click any node to focus its local network, and click again to dismiss. Double click on any node to open its opensecrets.org page.

This web application was developed by Declan Bradley using react, sigmajs, and materialize, and incorporates sample code from all three libraries. Thank you to the developers of those tools for making this work possible.

The final project is available at https://declanrjb.github.io/2022-midterms/.

## Methodology

The source data for this chart was crawled from opensecrets.org using R. The script focused on candidates as initial data points, taking in a list of candidate CIDs provided by Open Secrets in their API documentation at https://www.opensecrets.org/open-data/api-documentation. Based on these IDs, the script then called the CandContrib method of the API for each candidate, returning a list of between 0 and 10 top donors and amounts, depending on the available data. This list was then filtered, retaining only donations of $1000 or more. My thanks to Open Secrets for the important work they do and for providing the API that makes this project possible.

After cleaning for duplicates and near duplicates (ie, variant spellings and capitalizations), this yielded a total of 4886 nodes and 7667 edges. The remaining nodes and edges were imported into Gephi and arranged using the Fruchterman Reingold method with the following settings:

| Property  | Value   |
|-----------|---------|
| Area      | 48860.0 |
| Gravity   | 1.0     |
| Speed     | 20.0    |

At the time of layout, Gephi factored existing connections and node size into final positions, but had no access to party association or other political information. Any appearance of a party arrangement in the final graph is purely a result of the efficiency calculations built into the Fruchterman Reingold process. The following variables were used at the time of layout:

| Property    | Value                                              |
|-------------|----------------------------------------------------|
| Node size   | Tenth root of amount total in $, given or received |
| Connections | Calculated from the above data set                 |

The following aesthetic attributes were added after the layout process:

| Property     | Value                                                                             |
|--------------|-----------------------------------------------------------------------------------|
| Color        | By party alignment: blue for Democrat, red for Republican, yellow for Independent |
| Edge Weight  | Log base 2 of the amount the edge represents, in $                                |
| Edge Opacity | As a proportion of edge weight, with the same calculation as above                |
| Rotation     | By a random seed, the layout algorithm placed Republicans on the left of the graph and Democrats on the right. The graph was rotated 180 degrees to make this less confusing. |

The finished chart was loaded into the project as a gexf file and rendered using sigmajs.
