## Abstract
---

```
[p.1, 17]: "an RDF based metadata" -> a metadata? I would either write remove "an" or s/metadata/metadata record/
[p.1, 19]: "Searchability is achieved by SPARQL, which, however, requires considerable technical knowledge." -> but SHACL doesn't? 
[p.1, 20]: "an JSON object" -> a JSON object
[p.1, 20]: "... is an approach which is less dependent on the users background." -> wrt? why? because there's no SPARQL involved?
[p.1, 22]: "The evaluation was performed based on.." -> the evaluation of what? what aspects of your approach are you going to evaluate?
[p.1, 23]: "a solution was found that is equivalent in these terms." -> equivalent to what? what terms? 
[p.1, 24]: "Through the integration of the developed mapping in data management platform Coscine," -> "mapping in"? did you mean to say "within the data man..."?
[p.1, 25]: "which at the same time promotes the subsequent use." -> subseq use of what?

[general]: I would appreciate 1-2 sentences elaborating on the concept of "research data". (what it's used for, what information it usually contains, etc. pp) 
```

## Introduction
---

``` 
[p.1, 41/48]: since you are citing other W3C standards too -> add citations for RDF and SHACL
[p.1, 43]: "A standardized presentation of the data makes the information machine-readable and thus a search possible" -> does it though? what if the standardized way of presenting certain (research) data is to make handwritten copies? rephrase! 

[p.2, 45]: "research data should be documented ... and assigned to the researcher so that queries regarding the data can be made." -> assigned to the researcher? wouldn't linking it to the actual publication/study/etc. the data was a part of, make more sense? I could see myself looking for research data by traversing through a "linked" list of publications rather than asking for something along the lines of "give me all research data from 2020 that is associated with Sarah Bensberg"..
[p.2, 29]: "instead, every single researcher is under obligation" -> obligated to do what? curate data? rephrase!

[p.3, 34]: "because it is to be beneﬁted the from structure and inference rules," -> what? who is to be benefited? the Coscine KG? clarify!
 
[p.4, 4]: "which is relies on SHACL" -> "which relies on SHACL" or "which is relying on SHACL" 
[p.4, 18]: "The mapping applies inference rules ... to inject further human knowledge into the object." -> what? what human knowledge? are the inference rules inferring human knowledge which is subsequently injected into the object? is that even possible? ;)
```

## Background
---

``` 
[p.4, 7]: "conceived data model" -> "conceived data models"
[p.4, 16 and 39]: "Dublin Core [21]" vs "Dublin Core [23]" -> either add "terms" to [21] or merge citations
 
[p.5, 5-7]: "If a search is made for a speciﬁc piece of information within this system, the correct answer is found and only this answer exists" -> I get where you are coming from, i.e. broadly speaking: under CWA the absence of information means that said information doesn't exist as compared to OWA where absence of information doesn't mean it's not existing but just hasn't been "discovered" yet.. if that was also the message you wanted to convey, please rephrase!
[p.5, Example 2]: The inconsistencies shown in this example rely on the fact that "a person can only live in one country" which, however, is the only thing not formalized.. please add it to both parts of the example! 
[p.5, 46-51]:  "SHACL can be divided into the two languages SHACL Core language and SHACL-SPARQL. SHACL shapes thus provide the means to describe an application proﬁle with technologies of the Semantic Web" -> SHACL shapes provide the means to describe app. profiles, because SHACL can be divided into SHACL core and SHACL-SPARQL? clarify and/or move the last sentence up (right after the validation part).

[p.6, 1]: either provide some context as to why you are providing an example of a SHACL shape or remove it 
[p.6, 8-9]: "Using sh:property a property is deﬁned which in the example corresponds to ex:author. " -> no, a shape of the property is defined not the property itself 
[p.6, 11]: "class ex:author" -> "class ex:Author"
[p.6, 24]: "Coscine uses a project-based system" -> I would s/project-based/project-centered/ (or something along those lines)
[p.6, 31]: "which provides a resolution via the Handle system [34]" -> what's the Handle system?! provide some context!
[p.6, 42-44]: This reads like it's the fault of the RDF model's flexibility that you cannot define "specifications or req.".. but is it though? a counterexample: if I serialize my SHACL shapes graph as .ttl, I can express "spec. and req." while still using RDF (+ its flexibility).. right? So I would rather argue it was the lack of a suitable/dedicated language for validating RDF graphs against constraints and not primarily (just) the fault of RDF's flexibility.
[p.6, 51]: "allow inconsistencies and supposed contradictions" -> what are "supposed contradictions"?
[p.6, 28-29]: I would rephrase this to "a sh:NodeShape allows for validating that its focus nodes meet the shape's conditions, otherwise..." 
[p.6, 39-51]: move the paragraph describing SHACL application profiles in front of the previous sentence/paragraph where you mention SHACL AP for the first time (or make a reference to it) 

[p.7, 28]: remove "coscineengmeta:subject" (copy/paste error from [p.23, 11])  
[p.7, 46-47]: how's that? why?  
[p.7, 50]: "The illustrations shows" -> -s 
[p.7, 2]: "Data types are also transformed" -> what data types? you mean sh:datatype constraints? 
[p.7, 15]: "validate the metadata using the shape" -> what shape?
[p.7, 20]: s/Example B/Appendix B/ 
```

## Resource Object Mapping
---

```
[p.7, 48]: Within the resource graphs, predicates
[p.7, 51]: "is not interested in the URIs or does not even know it" -> doesnt even know what? 
[p.8, 3]: "depending on the instance or class" -> what does this mean?  
[p.8, 7-8]: "However, all used classes and bounding conditions are known" -> known by whom? 
[p.8, 16]: "and thus make it explicit" -> make what explicit? 
[p.8, 40]: s/\$this/$this/
[p.8, 48-49]: dfgCS:A409-02 a dfgCS:A409-02 -> what?

[p.9, 5]: dfgCS: a dfgCS: -> what?
[p.9, 12]: remove the weird linebreak symbol
[p.9, 34-37]: Why are human beings aware of further information and more importantly, why is this information withheld from a machine? who withholds it? Use the explanation of Example 11 here too.
[p.9, 37]: "The rules are used to slightly close this gap" -> why only slightly? why not attempt to close it completely? 
[p.9, 14]: s/\$this/$this/
[p.9, 16]: ID == EPIC Persistent Identiﬁer (PID) ? if not, what's the difference?
[p.9, 37-39]: just out of curiosity, is there any particular reason for storing version numbers as ints? I probably would have defined them as strings and thus also allowed for minor/major version increments like "1.1.7" (nvm, in Example 11 you get the newest version by sorting the entries by their version number..)

[p.10, 13]: this should actually be v2 rather than v1 right? => `<http://hdl.handle.net/...@path=v2.dat> ex:isNewestVersion true .` 
[p.10, Example 11]: what happens if there's a new version v3, which supersedes v2 and thus would generate following additional triple for v2 -> `<http://hdl.handle.net/...@path=v2.dat> ex:isNewestVersion false .`? wouldn't this lead to the following -> `<http://hdl.handle.net/...@path=v2.dat> ex:isNewestVersion false, true .`?
[p.10, 42-43]: "Also, the additional rules do not have to generate boolean objects." -> what? also why not?
[p.10, 20]: "by using the additional rules." -> THE additional rules? or any additional rules? if it's the former, what are those dedicated "additional rules"? 
[p.10, 32]: what edges are you talking about? the edges of the graph? if yes, what are the "objects" of a graph? are objects == vertices/nodes? clarify! 
[p.10, 35-37]: what's the difference between resources I and URIs U? why are only subjects \in I? What about blank nodes? are blank nodes == I == "resources"? assuming RDF as a basis, why go for URIs and not IRIs (see https://www.w3.org/TR/rdf11-concepts/#section-IRIs)? clarify!
[p.10, 40-45]: you aren't defining the actual mapping to JSON but trying to define the resulting JSON object. 
               what's the difference between \hat{G} and G'? how's \hat{G} actually defined?  
[p.10, 43-44]: S', P', O' are missing their "i" subscript; 
               if <S'_i,P'_i,O'_i> \in G', and assuming G' is the "resulting mapped >RDF< graph of G' how can P'_i then be a string? or did you want to define a JSON object where RDF properties become "string" keys and RDF objects the respective values? 

[p.11, 43-50]: examples 7 and 9 only construct rdfs:label triples, so where are the additional "creators" coming from?
[p.11, 3]: it's not clear that apparently you use (only?) rdfs:label values when "flatmapping" properties to their JSON values.. please emphasize this earlier in the paper..
[p.11, 38-40]: what? also is it: (same properties are deﬁned in different SHACL shapes (with the same data type or are described using instances of one class)) or ((same properties are deﬁned in different SHACL shapes with the same data type) or are described using instances of one class))?
[p.11, 42-43]: what about things like xsd:double, xsd:date, etc.? (in Table1 you mention "different data types" -> string.. in case "different datatypes" means in that context "all other datatypes not mentioned" -> clarify this here too! )

[p.12, Table 1]: what if a property is described only in one shape? 
```

## Evaluation
---

```
[p.12, 17-19]: "the context of Coscine was used ... in the context of searchability was evaluated" -> what? is the first "context" you mention actually referring to a JSON-LD context? 
[p.12, 19-22;50-51]: "For the considered tests described in this section...All of them are based on ... [43]" vs "The evaluation is based on data record [40]" => [43] == [40]?
[p.12, 27-28]: what assumptions are you referring to? your hypothesis? clarify!
[p.12, 39-11]: it would be nice if you could visually indicate the "specifics" about each query.. e.g. "Data records about \textbf{political left}". 
[p.12, 18]: s/on IT Center/at the IT Center/
[p.12, 28]: s/in the version/in version/
[p.12, 30-32]: why did you change those parameters? what do they do? 
[p.12, 50]: a dataset with just 35 records is imo not only super small but also insufficient for drawing any conclusions wrt. performance overhead etc. (btw. up to this point the reader doesn't really know that there's also another (larger) dataset you did use for evaluation later on..) why not just use the "bigger" dataset?  

[p.13, 28-29]: the ranking is based on what? 
[p.13, 30-31]: what are stop words? 
[p.13, 51-8]: "This semantic problem also exists when using SPARQL queries" -> would it though? with SPARQL, I, e.g., could just use a more sophisticated query and/or utilize the structure of the RDF data?    
[p.13, 18-27]: I appreciate the reference to Nielsen [46].. I wasn't aware of this work, thx! :) 
[p.13, 33]: what? rephrase! 
[p.13, 38]: what visibility restrictions? 
[p.13, 44-45]: "An execution time of 221 ms was measured." -> on average? how many runs? ..? 
[p.13, 50-51]: "was executed for each query 100 times in a row" -> did you cater for any "caching" that may occur between consecutive runs? hot/cold loads?  

[p.14, Table 4/5]: any idea why the avg mapping time stayed the same/decreased for the larger record? 
[p.14, Table 5]: any idea what could've caused the extreme outlier of +- 129 for the "non Comput. Human Consci." intention? 
[p.14, 31-35]: again, why not use the 10k record dataset as your "primary" dataset?  

[p.15, Table 7]: Reindexing takes +- 1min is this a normal/expected range? if not, any ideas as to why?  
[p.15, 29]: "The average value for 100 consecutive executions is 3217 ms." -> is this somehow represented also in Table 7, where you report 837+-143 and 3055+-233 as times for adding records.. ?
```

## Related Work
---

```
[p.16, 3-5]: what? what can be found in other properties?  
[p.16, 27-28]: "the domain is not known in advance or can change by further " -> "and can change" right?
[p.16, 33-35]: move "is interesting" to the end of the sentence 
[p.16, 41-43]: why is it possible to store "human knowledge" using inference rules? what's exactly "human knowledge" in that context? 
```


## Related Work
---

```
[p.16, 5-6]: " when prepared to generated SPARQL queries." -> what? 
[p.16, 16]: which are ...? 
[p.16, 17;22]: "Two disadvantages of the mapping...do not bring any disadvantage for them" -> so is it now a disadvantage or not? rephrase!
[p.16, 24-26]: what? extension of what? great influence == ? elaborate!
[p.16, 27-32]: because ...? 

[p.17, 1-2]: how does this relate to [p.16, 43-44] where you say "This means that all knowledge or structures must be aware of and considered in adv." ?
[p.17, 10]:  "SHACL validated SHACL rules" -> " SHACL validated; SHACL rules" ?
```


## References & Appendix
---

```
[20,24,35,39,...]: Please cite W3C standards (and/or URLs in general) properly! 
[general]: consider ordering the references alphabetically making it easier to spot any duplicates

[p.23, 11]: shouldn't it be "sh:class dfg:faecher" ?
```
