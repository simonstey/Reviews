## Abstract
---

1. > often addressed as "CoNLL formats".
   - CoNLL == ?
2. > **A large number of such formats do exist**, but although they share a number of common features, **they are not interoperable**, as different pieces of information are encoded differently in these dialects.
   - none of them ever?
3. > Current applications of CoNLL-RDF include linking between corpora and dictionaries [28] and knowledge graphs [36], syntactic parsing of historical languages [12,11], the consolidation of syntactic and semantic annotations [8], corpus querying [24], and language contact studies [6].
   - apart from the fact that having references in the abstract is rather unusual, this sentence also doesn't really belong in an abstract
   - remove! 

## 1 Motivation: Incompatible TSV formats
---
1. > ... but ranging to more research-intense challenges such as **discourse parsing, zero anaphora resolution** or **implicit semantic role labelling**.
   - for the non-NLP experts it would be nice to have some description of those challenges
   - also include refs
2. > For each of these processing steps, **numerous implementations and data sets to train your own classifiers upon are available**, normally, ...
   - such as? references!
3. > They do, however, usually follow common conventions, as both data sets and reference implementations often **originate from long-standing series of shared tasks**, ...
   - such as?
   - what are "shared tasks"?
4. > , in the long-standing series of **Shared Tasks** of the **Conference of Natural Language Learning (CoNLL)**, 
   - be consistent with upper/lower case.. throughout the paper you use both "shared task" $\iff$ "Shared Task"
   - add CoNLL description already in abstract
5. > A detailed discussion of this design decision can be found in the **original paper.**
   - add reference
6. > A user is only required to specify input and output formats (say, **CoNLL-U and CoNLL-X**)
   - ? arbitrary examples or do those formats actually exist? 
   - if it's the latter -> add references
7. > This workflow is then executed using the **Flexible Integrated Annotation Engineering (Fintan)** platform [18].
   - the T in Fintan is missing -> add Transformation
     - 18 Fäth, C., Chiarcos, C., Ebbrecht, B., Ionov, M.: **Fintan - Flexible, Integrated Transformation and annotation eNgineering**. In: Proc. of the Twelfth International Conference on Language Resources and Evaluation (LREC-2020). pp. 7212-7221. ELRA, Marseille, France (2020)


## 2 Background: CoNLL-RDF
---
1. > The CoNLL-RDF library is part of the **Flexible Integrated Annotation Engineering (Fintan)** platform [18], ..
   - the T in Fintan is missing -> add Transformation 
2. > because TSV allows for flexible encoding of any kind of word-level annotations, they provide an ideal middle ground between being machine-processable **and human-readable**, and they can be easily extended by creating additional columns with new annotations.
   - is this the reason why TSV is chosen over e.g. CSV? i.e. CSV is less human-readable than TSV?
3. > The listing below is an example **from the 2005 Shared Task** of the SIGNLL Conference ...
   - as someone not familiar/accustomed with the NLP domain -> what's a Shared Task? It would be nice if you could spend a few sentences at the beginning of the paper explaining what such a shared task is.
4. > Subsequently, the use of TSV formats to exchange linguistic data has since extended its spread beyond the **CoNLL Shared Task** and inspired novel corpora formats, e.g. **the CoNLL-U format by Universal Dependencies** has been created independent of the conference; however adheres and extends standards already motivated by the **CoNLL Shared Task**
   - Shared Task == ?
   - missing ref
   - Shared Task == ?
5. > and different extensions have been developed throughout the CoNLL **shared tasks.**
   - lower case vs upper case
6. > (as used by **TreeTagger**, the **Sketch Engine** and the **Corpus Workbench**).
   - missing refs
7. >  In essence, a user would need to write a **CFG parser** in SPARQL ...
   - CFG == ?


## 3 CoNLL-RDF ontology
---
1. > Fig 1
   - How shall this Figure be read? 
   - Why do some nodes have round corners?
   - What are dashed lines? (avoid putting them underneath other nodes)
   - why is `nif:sentence` struck out?
   - `hasMapping / ^property` is missing namespace prefixes
     - is this to be interpreted as SPARQL property path? if not -> what does `^` mean? 
   - `conll:arguments` why is this lower case while all other class names are upper case?
   - if space permits, try resizing nodes such that they span over 1-line only
2. >  The namespace prefix is **conll:**.
   - and what's the URI?
3. >  **The column label WORD**, used in CoNLL Shared Tasks until 2005, does, for example, **roughly correspond to the column label FORM**, but the latter is a generalization, so that `conll:WORD` is a `:subPropertyOf conll:FORM`.
   - why? is this "common knowledge" in the NLP community?
4. > The CoNLL ontology thus contains the full inventory of **PropBank** roles.
   - add ref
5. > As an example, a `nif:Word` within CoNLL-RDF must be an instance of `powla:Node`
   - ... because?
6. > ... as shown for the bracket notation above and the **IOBES** encoding below
   - IOBES == ?
7. >  In the CoNLLRDF ontology, we provide the full description of the CoNLL-00 format: 
`:CoNLL-00 a :Dialect;`
   - don't use `:` as a prefix, but `conll:`


## 4 CoNLL-Transform: Ontology-based transformation
---
1. > The Flexible Integrated Annotation Engineering (Fintan) platform
   - the T in Fintan is missing -> add Transformation  
2. > Fintan broadens the scope towards integrating support for other data formats, such as **OntoLex-Lemon for lexica** by allowing to easily integrate and run existing converters in complex pipelines. 
   - add ref
3. > is a superproperty of a CoNLL property from the target format (say, **conll:XPOS** in CoNLL-U)
   - add verbatim formatting

## References
---
1. > 8. Chiarcos, C., Fäth, C.: Graph-based annotation engineering: towards a gold corpus for role and reference grammar. In: 2nd Conference on Language, Data and Knowledge (LDK 2019). Schloss Dagstuhl-Leibniz-Zentrum fuer Informatik (2019
   > 9. Chiarcos, C., Fäth, C.: Graph-Based Annotation Engineering: Towards a Gold Corpus for Role and Reference Grammar. In: 2nd Conference on Language, Data and
Knowledge (LDK-2019). pp. 9:1-9:11. OpenAccess Series in Informatics, Schloss
Dagstuhl - Leibniz-Zentrum fuer Informatik, Germany (2019)
   - duplicates
2. > 28. Mambrini, F., Passarotti, M.: Linked open treebanks. interlinking syntactically annotated corpora in the lila knowledge base of linguistic resources for latin. In: Proc. of the 18th International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2019). pp. 74-81 (2019)
   > 29. Mambrini, F., Passarotti, M.: Linked Open Treebanks. Interlinking Syntactically Annotated Corpora in the LiLa Knowledge Base of Linguistic Resources for Latin. In: Proc. of TLT, SyntaxFest 2019. pp. 74-81. Association for Computational Linguistics, Paris, France (2019)
   - duplicates


The paper itself is at times not really self-contained as the authors assume their audience to be familiar with most of the rather complex terminology&research domain of NLP. While this would be somewhat fine to assume if submitted to a "NLP specific venue", I doubt that the average ESWC attendee (myself included) will have an easy read. As a first step, including more references and examples would help understanding the underlying motivation and proposed solution better.


The proposed solution seems to be thoroughly researched and complements CoNLL-RDF. The paper itself (apart from issues wrt. self-containment) is very well written.