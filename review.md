## Abstract
---
1. > The use of data quality management techniques is challenging when the data are not collected into a **single storage** and the **data items are not linked explicitly**
   - storage as in ..?
   - explicitly linked to what? one another? 
2. > correct the obsolete
   - correct obsolete
3. > across all of the data storages **within the enterprise**
   - what enterprise? (replace *the* with *a/an*)
4. > with **at least part of the data** remaining in their original storages and **not moved into a data lake**
   - what?
   - how much is *at least part of*?
   - what's wrong with data lakes?
5. > . The ontology-based
   - remove *The*
6. > We propose an approach and a system that utilizes the flexibility of ontology-based reasoning while keeping **the data** in place.
   - all data? "at least part of the data"? 
7. >  The proposed architecture **is being** evaluated by LUKOIL Oil & Gas as part of their Unified Digital Platform project.
   - is currently/was already/will be evaluated?
   - who from LUKOIL will do the evaluation? someone other than one of you? 

## 1 Introduction
---
1. > Best practices in data management (e.g. **ISO 8000** and **DAMA DMBOK**) define **the overall framework** and typical data quality operations processes
   - add references/footnotes
   - the overall framework of what?
2. > applying the same logical constraints to data in **various storages** without implementing them separately **in each system**.
   - various as in ..? different vendors/distributed data stores/..?
   - I reckon you meant to say *for* each system
3. > Ontologies are useful for representing knowledge of a complex and changing nature, and the **logic of inference that governs it**. 
   - what?
   - governs what? the knowledge?
4. > several **ontology-based specifications** and **implementational tools** (e.g. SWRL and SPIN, in the past; SHACL, more recently).
   - although the languages you mentioned do provide ontologies, I wouldn't characterize them solely as *ontology-based specifications*.. They are first and foremost Semantic Web rule / constraint languages.
   - none of the languages you listed are "implementation tools"?!
   - why add a footnote for SHACL, but none for SWRL and SPIN?
5. > Using **SHACL SPARQL-based constraints** for data quality control **is a natural idea.**
   - why? 
   - why only SPARQL-based ones?
   - *a natural idea* for what? rephrase!
6. > However, it is frequently the case that existing corporate data storage architectures **do not allow for their direct implementation.**
   - says who? provide ref. backing up your claim!
   - their == ? 
7. > The application of quality control rules requires that all corporate data (at least, all the data within the scope of an **applied task**) **must be collected into a single virtual storage.**
   - what's an applied task?
   - says who? why is this required?
8. > Business objects (such as equipment, personnel, work orders etc.) and associated events are often reflected in these systems, **both in duplicate and as independent data objects**
   - what?
9. > This means that **the property sets and classification rules** for the same business object may vary across systems
   - context? what prop sets and class. rules? 
10. > the transactional data (e.g. work orders) are usually non-synchronized and may even lack unified identifiers by which to link them
    - and why is that?
11. > We implement **the discussed data management task** using **an ontology-based data abstraction layer** (logical data mart)
    - what data man. task? where was that discussed?
    - *ontology-based* means what exactly in that context?
12. > **In this case,** data storages accessed through the data abstraction layer **are not the legacy system's database**
    - in what case?
    - what?
13. > **Classic reasoners** can only execute inference rules over triple stores. 
    - such as .. ?
14. > However, **some platforms** are currently capable of reasoning over ...
    - for example .. ?
15. > LUKOIL Oil & Gas Unified Digital Platform (UDP) project
    - add reference/link to project
16. > **The ontologies** have an **undoubted value** in structuring data using the following business concepts: <list of business concepts>
    - what ontologies?
    - undoubted value? do you mean requirement?
    - I don't understand how the part about business concepts ties in with the rest of the sentence..
17. >  A smooth transition to the data-centric architecture means that the existing business applications and their data **should remain intact in the initial stages.**
    - what does remain mean in that context?
    - only in the initial stages?
18. >  However, data taken from **them** should be available to the next generation of data-centric business applications via the **single ontology-based API**
    - from whom?
    - (single ontology)-based API <-> single (ontology-based API) ?

## 2 Related Work
---
1. > Using Semantic web technologies for accessing data stored in **the** relational and NoSQL stores **(OBDA)** is a well-known practice
   - remove *the*
   - this suggests that NoSQL stores are called (OBDA) -> move (OBDA) to the end of the sentence
2. > the authors propose a **DQV** metadata ontology structure to represent the data quality metrics of datasets
   - DQV == ? Data Quality .. ?
3. Generally I'm missing some more discussion on the open points/topics wrt. RW.. i.e. why can't you just adopt one of the mentioned RWs, but have to propose your own?

## 3 Implementation of the SPARQL endpoint over disparate data sources
---
1. > b) allow reasoning (SHACL SPARQL-based Constraints checking, in particular) **over the resulting virtual graph.**
   - resulting from where?
2. > The architecture of the **ArchiGraph platform** employed for virtual graph management consists of the components shown in Fig. 1.
   - who's ArchiGraph? why's its platform relevant/discussed now?
3. > Fig. 1
   - see above -> how is ArchiGraph integrating with your work?
4. > However, a detailed description of this model **is beyond the scope of this paper**
   - is it though? I would prefer such a detailed description over e.g. some of the less "informative" figures of the paper.
5. >  If an individual belongs to more than one class, it can be extracted from several storages. 
   - no (unless you move each class to its own storage?!)
6. > A general sequence of SELECT SPARQL request execution **includes**:
   - but isn't limited to?
   - how does this "general sequence" tie in with the stuff before? 
7. > The **algorithm** has a lot of features, including UNION clauses resolution, class-subclass inline inference, etc.
   - what algorithm?
   - add a second . after etc.
8. >  In general, this complex process will not provide real-time performance, so we recommend using the more **lightweight REST API** for routine data selection
   - which *lightweight REST API*?
9. > Along with internal data storages clustering, **it provides good flexibility and high availability** of the platform instance
   - according to..? how's e.g. *good flexibility* quantified?

## 4 Constraints and rules: construction and execution
---
1. > These could be easily implemented on the proposed platform using SHACL SPARQL-based Constraints and Rules, **which are translated into** SPARQL queries (ASK, SELECT, CONSTRUCT) for execution
   - translated as in ..? can't you just copy paste the query?
2. > The rules construction process presents more complexities
   - rephrase
3. > . A company's data validation rules generally require careful analysis, and **cannot** be derived automatically from existing data
   - well they *can* be derived automatically, but probably *shouldn't* ;)
4. > **Due to the relation direction,** this constraint cannot be simply checked with cardinalities.
   - what relation's directions?
   - what about [SHACL's Inverse Paths](https://www.w3.org/TR/shacl/#property-path-inverse)?
5. > **The example** demonstrates how constraints can be applied to the data residing in the platform's relational database
   - what example? Fig. 3?
6.  I would appreciate if you would use [some sort of code formatting](https://ctan.org/pkg/listings?lang=en) for things like sosa:Observation and alike
   - sosa:Observation -> `sosa:Observation`
7. > The **sosa:Sample** class is used to represent ... refers to some **Sample** of certain ...
   - either use the namespace everytime, emphasize names, or make them lower-case.
8. > ...which **the this** Observation **refers**.
   - remove one of the two
   - refers to.
9. > , we have chosen to express these logical limitations with a set of SHACL SPARQL-based Constraints
   - why? 
10. > **We** were **required** to implement a tool allowing analysts to build up constraints and rules visually, without **exploring** the complexity of SHACL or SPARQL syntax, **and to debug them**.
    - we == ?
    - required by whom?
    - exploring as in ..?
    - and to debug them? analysts should be able to debug constraints and rules?
11. > **This advantage** is emphasized in [Corman, 2019]
    - advantage over/compared to what?
12. > **It is particularly important in the present context** as it allows us to validate data extracted from external storages using ODBA **without materializing the whole graph.**
    - which would be a bad thing because...?
13. > and in the **event of a rule violation** the sh:ValidationResult individual is created ...
    - how do you violate a sh:Rule? do you mean constraint?
    - a rule is either triggered or not
14. > The ArchiGraph platform Data Access API receives a request that requires the **performance** of a constraints check
    - execution
15. > The Data Access API constraints checking module replaces the $this variable in the SPARQL query with **an object URI**, and passes the query to the platform's internal SPARQL endpoint
    - not just any object URI, but the specific focus node's URI
16. > The following query fragment is thus valid for our endpoint: ..
    - soo.. what's so special about this query that it needs to be given as an example?
17. > Fig 5
    - why are there two SQL databases?
    - maybe consider adding this figure **before** discussing steps 1-4


## 5 User interaction with the system
---
1. > A visual mapping rules editor can easily be added to the system, as rules are available through the platform API **as well as other data and model structures**.
   - such as..?
2. > Validation rules violations 
   - what are validation rules and how are they different from constraints?
   - rules -> rule (remove *s*)
3. >  For example, a software application, such as a business process management service, **may** subscribe to the violation notifications and can automatically initiate **some** handling processes
   - there's a lot of "wishi washi" in the first few paragraphs of this section.. try to be more precise and/or remove "fuzzy"/ambiguous terms like may/some/...
4. > A solution to **the first business task** 
   - the first of what business tasks? where's the rest?
5. > 4) Debug rules with **the** real data
   - remove the
6. > Fig 6.
   - I have to admit that I find the UI on a first glance rather confusing and overloaded.. but that's just my personal opinion ;) 
7. > Fig 10.
   - there's absolutely no reason to include this figure on its own as it doesn't convey any additional information whatsoever.. 


## 6 Evaluation
---
1. > situated in **the** Apache Fuseki.
   - remove
2. > The execution of the SPARQL query shown in Fig. 8 over the ArchiGraph SPARQL endpoint **took approximately 1.4 seconds.**
   - on average? best of n executions? one time? ...?
3. > These queries **take around 0.08 seconds** each
   - on average? best of n executions? one time? ...?
4. > The model data structure is extracted from the memory cache during the query execution. This **takes 0.8 seconds**
   - on average? best of n executions? one time? ...?
5. > Extraction of the samples for 10-minute interval, the certain sampling point, and one feature of interest **takes 1.6 seconds** (**including 0.4 seconds **for the SQL query to the remote database).
   - on average? best of n executions? one time? ...?
6. > The constraints check for these observations (execution of the SPARQL query from Fig. 9) **takes 19 seconds**
   - on average? best of n executions? one time? ...?
7. > Ontology-driven corporate software: a Cookbook^13 
   - please add as bibtex reference


**Unclear Motivation**
Just by reading the paper I'm not sure about (nor sold on)  the necessity of the proposed "custom" solution. On a first glance the stated challenge & implementation seems just like any other OBDA/query rewriting approach&solution. I was missing a clear statement elaborating as to why not just adopt one of the gazillion available standard approaches out there.

**Quality**
Several times I had to go back and forth trying to make sense of certain statements and notation used. In a perfect world, one could read a paper from start to finish without having to skim through it several times trying to find some particular terminology or motivation which might or might not have been introduced somewhere else in the paper.

**Lacking Evaluation**
Despite not being submitted to the research track, a more elaborated evaluation approach (i.e. reporting and backing of results) is necessary. Without context, statements like "*These queries take around 0.08 seconds each*" convey 0 information. 

**Unclear Project Setup**
What's the connection between ArchiGraph, LUKOIL, the UDP project, and the authors? 


1. **the use/adoption of SHACL** :)
2. attempted to accommodate for end-users to work with constraints & rules