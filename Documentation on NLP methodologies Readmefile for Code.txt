Documentation on NLP methodologies.

The purpose of this document is to provide the details of feature engineering methodologies and feature
selection. All machine learning algorithms use some input data to create outputs. This input data comprises
features, which are usually in the form of structured columns. Algorithms require features with some specific
characteristic to work properly. Here, the need for feature engineering arises. Feature engineering efforts
mainly have two goals:

· Preparing the proper input dataset, compatible with the machine learning algorithm requirements.
· Improving the performance of machine learningmodels.

While most of the automated Featuring Engineering address numeric data, Text Data has always been left out
in this race because of its inherent unstructured nature. WK receive lots of information in the form of text
data. To generate feature from text data and train AI models with this feature is a complex process. WK uses
methodologies like Word embedding and TF-IDF to generate feature from text data.

Word embedding is one of the most popular representation of document vocabulary. It is capable of
capturing context of a word in a document, semantic and syntactic similarity, relation with other words, etc.
While TF-IDF is a statistical measure that evaluates how relevant a word is to a document in a collection of
documents. This is done by multiplying two metrics: how many times a word appears in a document, and the
inverse document frequency of the word across a set of documents.

Apart from Word embedding and TF-IDF methodologies, WK uses other feature engineering methodologies
to train the AI model.

WK uses various feature engineering techniques (i.e. Word embedding, TF-IDF, Clustering, Out of Pattern
(OOP), LIFT, etc.) to generate features from text as well as numerical data. Once features are generated next
important step is to select the relevant features.

Feature Selection is the process where automatically (using machine learning algorithms like Random forest,
XGBoost etc.) or manually those features are selected which contribute most to the prediction variable.
Having irrelevant features in the data can decrease the accuracy of the models and make the model learn
based on irrelevant features. WK uses Random Forest algorithm to select the most relevant features for
model development. Using Random forest top 1,500 features have been selected out of total of 1,800
features.

1. Word Embedding: Word Embedding are vector representations of a particular word. It is a class
of techniques where individual words are represented as real-valued vectors in a predefined vector
space. Each word is mapped to one vector and the vector values are learned in a way that resembles a
neural network, and hence the technique is often lumped into the field of deep learning. Key to the
approach is the idea of using a dense distributed representation for each word.
Each word is represented by a real-valued vector, often tens or hundreds of dimensions. This is
contrasted to the thousands or millions of dimensions required for sparse word representations, such as a
one-hot encoding.

2. TF-IDF: Tf-idf stands for term frequency-inverse document frequency, and the Tf-idf weight is a weight often
used in information retrieval and text mining. This weight is a statistical measure used to evaluate how
important a word is to a document in a collection or corpus. The importance increases proportionally to
the number of times a word appears in the document but is offset by the frequency of the word in the
corpus.

The Tf-idf weight is composed by two terms: the first computes the normalized Term Frequency (TF), aka. the
number of times a word appears in a document, divided by the total number of words in that document; the
second term is the Inverse Document Frequency (IDF), computed as the logarithm of the number of the
documents in the corpus divided by the number of documents where the specific term appears.

● TF: Term Frequency, measures how frequently a term occurs in a document. Since every document is
different in length, it is possible that a term would appear much more times in long documents than shorter
ones. Thus, the term frequency is divided by the document length (aka. the total number of terms in the
document) as a way of normalization.

· IDF: Inverse Document Frequency, measures how important a term is. While computing TF, all terms are
considered equally important. However, it is known that certain terms, such as "is", "of", and "that", may appear a
lot of times but have little importance. Thus, the frequent terms have been weighted down while scale up the rare
once, by computing the following: