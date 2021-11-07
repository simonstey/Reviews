In the present paper, the authors introduce a differentially private SPARQL query engine for COUNT queries and support their proposed solution by providing an evaluation using Wikidata and Watdiv.  At times the paper is rather hard to read, especially since more often than not particular choices of formalisms aren't motivated enough. Please find detailed remarks underneath ->

## General (throughout the entire paper)
---

1. s/[Dd]eferential(ly)?/[Dd]ifferential(ly)?/ -> deferential != differential (cf. https://www.merriam-webster.com/dictionary/deferential vs. https://www.merriam-webster.com/dictionary/differential)
2. a wild mix of upper/lower case of certain terms (e.g. [Dd]ifferential [Pp]rivacy, [Ss]tar queries, ...) be consistent!
3. s/[sS]tart/star/ -> p.5 lines 1,5 and p.14 line 25

## Abstract
---

1. "The notions of differential privacy are defined independent of the data model and the query language." -> the DM and the QL of what?
2. "Most results have been ..." -> what results?
3. "The data model has been typically the relational model and the query language SQL." -> again: what data model? "the" implies you are referring to a particular data model
4. s/deferential/differential/ -> deferential != differential (cf. https://www.merriam-webster.com/dictionary/deferential vs. https://www.merriam-webster.com/dictionary/differential)
5. "... good realizations of deferential[sic!] privacy for queries that required joins had been limited." -> what's "good"? why are joins suddenly relevant?
6. "most interesting queries accessing RDF graphs will require intensive use of joins" -> interesting according to whom? isn't the "interestingness" of smth. subjective?
7. "Recently though, new techniques" -> -though
8. "new techniques have been developed that can be applied to many types of joins in SQL with reasonable results" -> what "new techniques"? I reckon you are referring to DiffPriv-aware techn., but this isn't immediately clear from the sentence; reasonable as in ...? 
9. "... if the RDF graph is accompanied with some natural semantic information about its structure" -> what's "some natural semantic information"? some additional triples? where does this info come from? how much is "some"?

## Introduction
---

1. "Privacy is associated with liberty, but it is also associated with privilege ..., with confidentiality, with nonconformity and dissent, with shame and embarrassment, with the deviant and the taboo (...), and with subterfuge and concealment" -> any particular reason you chose this rather negatively connoted definition of privacy? 
2. "... Li et al [2] have looked at recent privacy breaches" -> I wouldn't call 2013 recent (that's ~8 years ago)
3. "and concluded, perhaps not surprising," -> -perhaps not surprising;  
4. "that an electronic privacy breaches" -> -an
5. "always ended with giving an attacker the ability to identify using public data whether" ->  identify (using public data) whether
6. "such the advance" -> such as the advance
7. "data is frequently made public" -> what kind of data? any data?
8. "But even in such cases," -> !Especially! in such cases..
9. "Publishing data with perfect privacy means that no assumption can be made about the prior knowledge an attacker may have about the supposedly anonymous set" -> what? so is this then a bad thing? i.e. in order for being able to assess an attackers prior knowledge about data requires the data to not be perfectly private? what? 
10. s/prefect/perfect/
11. "t-closeness" -> add ref
12. "were developed but they were shown to have weak privacy guarantees." -> according to whom? add reference backing up your claim!
13. "In spite of its limitations" -> which are..? elaborate and/or add reference
14. s/deferentially/differentially/ 
15. "from the query applied to similar datasets, D'." -> from the query applied to similar datasets, D' \in\mathds{D}
16. "Smaller the diversity required, the better the utility. " -> The smaller the...
17. " This is called in the literature sensitivity of the query." -> what literature? add ref.!
18. " Calculating sensitivity is not trivial and approximations are used." -> says who? who uses approx. ? add ref!
19. "However, until recently, in order to get reasonable approximations of sensitivity ...[6]" -> 2009 != recently 
20. s/deferential/differential/ 
21. "By the simple nature that data in RDF repositories is stored in binary relations, most interesting queries will require operations equivalent to joins" -> what? interesting according to whom? rephrase the whole sentence!
22. "This result has been possible by introducing" -> has been made possible
23. "of RDF tuples into sub-graphs that can be then used as single units for privacy protection." -> single units of what? what's a "unit"? rephrase!
24. "and it should not be difficult for an administrator to define" -> but you are not sure? what administrators?
25. "that uses the approximation to answer counting and grouping SPARQL queries" -> +"with joins" right?
26. "using the Wikidata knowledge base. We also run simulations using the Watdiv evaluation framework " -> add references for both wikidata and watdiv
27. "that can be answered with reasonable utility in smaller datasets" -> reasonable according to..? utility as in ..?
28. "with the fundamental concepts" -> to the fundamental concepts

## Background
---

1. "and how it has been addressed." -> by whom? you or in related work?
2. "Intuitively, a randomized algorithm" -> what's a randomized algo? why do we need them? elaborate!
3. "Formally, this corresponds to the notion of bounded differential privacy [8], where all datasets separated by a finite distance share the same number of tuples. " -> does it though? if I read [8] correctly, they say that "bounded -> |D| = |D'|", but not that "d(D,D') = k -> |D| = |D'|"  right?
4. " In the reminder" -> remainder 
5. "A dataset formed by multiple sets T1, ... , Tn" -> later you use T to denote dataset transformers.. as those two aren't the same thing, may consider choosing a different letter to avoid confusion
6. " In the realm of differential privacy, this "faithfulness" property is referred to as the mechanism utility. " -> this needs to be introduced earlier! (see 16/27 above)
7. "Definition 2" -> indicate that D' \in\mathds{D}  
8. "On the one hand, it allows handling queries that fail to have a bounded global sensitivity, but do have a bounded local sensitivity" -> are there queries which have neither?

## SPARQL Preliminaries
---

1. "what we would like to protect is the disclosure of the presence or absence of a sub-graph of G that represents the contribution of a single individual or entity to G." -> what? what's a contribution to G? what's the difference between an individual and an entity?
2. "the contribution of entity i to the dataset G = Ug_i" -> add value range of i
3. "we define graphs at distance 1 as graphs" -> at distance 1 to what? each other?
4. s/don't/do not/ 
5. "In a simple start we call the center of the star" -> s/start/star/ 
6. "Note that start BGPs are similar to Star queries" -> s/start/star/ 
7. "triple patter in a star" -> s/patter/pattern/
8. "Figures 3 and 4 show two disjoint star BGPs with central vertex ?v0." -> are you talking about the figures on page 10? or is this a copy/paste error? 
9. "Hence, given an RDF graph G, we will call the (RDF) graph induced ... induced by each of the star BGPs in the schema." -> please shorten this sentence and/or split it and/or try to rephrase so it gets easier to read and understand.. 
10. "iff G coincides with the graph induced by P from G." -> when are two graphs coinciding with each other?
11. "Administrators should then provide Differential Privacy..." -> what Administrators?
12. "with the largest stars possible.." -> the largest stars of what? the largest amongst what?
13. " A graph g belongs to the set iff ..." -> what set? move the following definition here: "and denote the set of all sub-graphs, {g1, ... , gn}, by P(G)"
14. "and its meaning, denote by [[B¯]]_G" -> denoted
15. "Example 3.2" -> what's the purpose of this example? context? you don't refer to it in the text..
16. "For any query B¯ ... we can naturally define ... a split B÷P of B as follows" -> what's a split? why do we need such a split? elaborate! 
17. "The interest of B÷P is that it lets us isolate the part of the graph necessary to answer each Bi" -> what; rephrase

## Evaluation
---

1. the formatting of lines 18-26 on page 11 is completely off.. 
2. "S^(k)(,)" -> (,) ?
3. fix formatting of Table 1/2's Elastic Stability column 

## References
---

1. [10-11] -> duplicates
2. [13] -> use latest Recommendation version not Last Call WD