// There are total of n courses to take, labeled from 0 to n-1
// Some courses have prerequisite courses. This is expresses as
// a pair i.e. [1,0] which indicates you must
// take course 0 before taking course 1.
// Given the total number of courses and an array of
// prerequisite pairs, return if it is possible to finish all courses
// Directed edge

// n = 6, 6 courses : 0,1,2,3,4,5
// prerequisite: [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]]

// cycle ? - If there is a cycle - we can't complete all the courses - return false
// constraints
// can nodes be disconnected ?

