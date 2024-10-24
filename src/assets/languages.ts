export const algorithms = [
    {
        language: "C",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    void swap(int* a, int* b) {
                        int t = *a;
                        *a = *b;
                        *b = t;
                    }

                    int partition(int arr[], int low, int high) {
                        int pivot = arr[high];
                        int i = (low - 1);
                        for (int j = low; j <= high - 1; j++) {
                            if (arr[j] < pivot) {
                                i++;
                                swap(&arr[i], &arr[j]);
                            }
                        }
                        swap(&arr[i + 1], &arr[high]);
                        return (i + 1);
                    }

                    void quickSort(int arr[], int low, int high) {
                        if (low < high) {
                            int pi = partition(arr, low, high);
                            quickSort(arr, low, pi - 1);
                            quickSort(arr, pi + 1, high);
                        }
                    }`
            },
            {
                name: "Merge Sort",
                code: `
                    void merge(int arr[], int l, int m, int r) {
                        int i, j, k;
                        int n1 = m - l + 1;
                        int n2 = r - m;
                        int L[n1], R[n2];
                        for (i = 0; i < n1; i++) L[i] = arr[l + i];
                        for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
                        i = 0; j = 0; k = l;
                        while (i < n1 && j < n2) {
                            if (L[i] <= R[j]) {
                                arr[k] = L[i];
                                i++;
                            } else {
                                arr[k] = R[j];
                                j++;
                            }
                            k++;
                        }
                        while (i < n1) {
                            arr[k] = L[i];
                            i++;
                            k++;
                        }
                        while (j < n2) {
                            arr[k] = R[j];
                            j++;
                            k++;
                        }
                    }

                    void mergeSort(int arr[], int l, int r) {
                        if (l < r) {
                            int m = l + (r - l) / 2;
                            mergeSort(arr, l, m);
                            mergeSort(arr, m + 1, r);
                            merge(arr, l, m, r);
                        }
                    }`
                                },
            {
                name: "Binary Search Tree",
                code: `
                    struct node {
                        int key;
                        struct node *left, *right;
                    };

                    struct node* newNode(int item) {
                        struct node* temp = (struct node*)malloc(sizeof(struct node));
                        temp->key = item;
                        temp->left = temp->right = NULL;
                        return temp;
                    }

                    struct node* insert(struct node* node, int key) {
                        if (node == NULL) return newNode(key);
                        if (key < node->key)
                            node->left = insert(node->left, key);
                        else if (key > node->key)
                            node->right = insert(node->right, key);
                        return node;
                    }

                    struct node* search(struct node* root, int key) {
                        if (root == NULL || root->key == key)
                            return root;
                        if (root->key < key)
                            return search(root->right, key);
                        return search(root->left, key);
                    }`
            },
            {
                name: "Binary Search",
                code: `
                    int binarySearch(int arr[], int l, int r, int x) {
                        while (l <= r) {
                            int m = l + (r - l) / 2;
                            
                            if (arr[m] == x)
                                return m;
                            
                            if (arr[m] < x)
                                l = m + 1;
                            else
                                r = m - 1;
                        }
                        
                        return -1;
                    }

                    int arr[] = {2, 3, 4, 10, 40};
                    int n = sizeof(arr) / sizeof(arr[0]);
                    int x = 10;
                    int result = binarySearch(arr, 0, n - 1, x);
                    if (result == -1)
                        printf("Element is not present in array");
                    else
                        printf("Element is present at index %d", result);
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    void bfs(struct Node* root) {
                        if (root == NULL)
                            return;

                        struct Queue* queue = createQueue(100);

                        enqueue(queue, root);

                        while (!isEmpty(queue)) {
                            struct Node* node = dequeue(queue);
                            printf("%d ", node->data);

                            if (node->left != NULL)
                                enqueue(queue, node->left);

                            if (node->right != NULL)
                                enqueue(queue, node->right);
                        }
                    }

                    int main() {
                        struct Node* root = newNode(1);
                        root->left = newNode(2);
                        root->right = newNode(3);
                        root->left->left = newNode(4);
                        root->left->right = newNode(5);

                        printf("Breadth First traversal of binary tree is \n");
                        bfs(root);

                        return 0;
                    }
                `
            }
        ]
    },
    {
        language: "C#",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    public static void QuickSort(int[] arr, int left, int right)
                    {
                        if (left < right)
                        {
                            int pivot = Partition(arr, left, right);
                            QuickSort(arr, left, pivot - 1);
                            QuickSort(arr, pivot + 1, right);
                        }
                    }

                    private static int Partition(int[] arr, int left, int right)
                    {
                        int pivot = arr[right];
                        int i = left - 1;

                        for (int j = left; j < right; j++)
                        {
                            if (arr[j] < pivot)
                            {
                                i++;
                                int temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }

                        int temp1 = arr[i + 1];
                        arr[i + 1] = arr[right];
                        arr[right] = temp1;

                        return i + 1;
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    public static void MergeSort(int[] arr, int left, int right)
                    {
                        if (left < right)
                        {
                            int middle = (left + right) / 2;
                            MergeSort(arr, left, middle);
                            MergeSort(arr, middle + 1, right);
                            Merge(arr, left, middle, right);
                        }
                    }

                    private static void Merge(int[] arr, int left, int middle, int right)
                    {
                        int[] leftArray = new int[middle - left + 1];
                        int[] rightArray = new int[right - middle];

                        Array.Copy(arr, left, leftArray, 0, middle - left + 1);
                        Array.Copy(arr, middle + 1, rightArray, 0, right - middle);

                        int i = 0, j = 0;
                        int k = left;

                        while (i < leftArray.Length && j < rightArray.Length)
                        {
                            if (leftArray[i] <= rightArray[j])
                            {
                                arr[k] = leftArray[i];
                                i++;
                            }
                            else
                            {
                                arr[k] = rightArray[j];
                                j++;
                            }
                            k++;
                        }

                        while (i < leftArray.Length)
                        {
                            arr[k] = leftArray[i];
                            i++;
                            k++;
                        }

                        while (j < rightArray.Length)
                        {
                            arr[k] = rightArray[j];
                            j++;
                            k++;
                        }
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    public class BinarySearchTree
                    {
                        public Node Root;

                        public BinarySearchTree()
                        {
                            Root = null;
                        }

                        public void Insert(int key)
                        {
                            Root = InsertRec(Root, key);
                        }

                        private Node InsertRec(Node root, int key)
                        {
                            if (root == null)
                            {
                                root = new Node(key);
                                return root;
                            }

                            if (key < root.Data)
                                root.Left = InsertRec(root.Left, key);
                            else if (key > root.Data)
                                root.Right = InsertRec(root.Right, key);

                            return root;
                        }

                        public bool Search(int key)
                        {
                            return SearchRec(Root, key);
                        }

                        private bool SearchRec(Node root, int key)
                        {
                            if (root == null || root.Data == key)
                                return root != null;

                            if (root.Data > key)
                                return SearchRec(root.Left, key);

                            return SearchRec(root.Right, key);
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    public static int BinarySearch(int[] arr, int left, int right, int x)
                    {
                        while (left <= right)
                        {
                            int mid = left + (right - left) / 2;

                            if (arr[mid] == x)
                                return mid;

                            if (arr[mid] < x)
                                left = mid + 1;
                            else
                                right = mid - 1;
                        }

                        return -1;
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    public static void BreadthFirstSearch(Node root)
                    {
                        if (root == null)
                            return;

                        Queue<Node> queue = new Queue<Node>();
                        queue.Enqueue(root);

                        while (queue.Count > 0)
                        {
                            Node node = queue.Dequeue();
                            Console.Write(node.Data + " ");

                            if (node.Left != null)
                                queue.Enqueue(node.Left);

                            if (node.Right != null)
                                queue.Enqueue(node.Right);
                        }
                    }
                `
            }
        ]
    },
    {
        name: "C++",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    void quickSort(int arr[], int low, int high) {
                        if (low < high) {
                            int pi = partition(arr, low, high);
                            quickSort(arr, low, pi - 1);
                            quickSort(arr, pi + 1, high);
                        }
                    }

                    int partition(int arr[], int low, int high) {
                        int pivot = arr[high];
                        int i = (low - 1);
                        for (int j = low; j <= high - 1; j++) {
                            if (arr[j] < pivot) {
                                i++;
                                swap(&arr[i], &arr[j]);
                            }
                        }
                        swap(&arr[i + 1], &arr[high]);
                        return (i + 1);
                    }

                    void swap(int* a, int* b) {
                        int t = *a;
                        *a = *b;
                        *b = t;
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    void merge(int arr[], int l, int m, int r) {
                        int n1 = m - l + 1;
                        int n2 = r - m;
                        int L[n1], R[n2];
                        for (int i = 0; i < n1; i++)
                            L[i] = arr[l + i];
                        for (int j = 0; j < n2; j++)
                            R[j] = arr[m + 1 + j];
                        int i = 0, j = 0, k = l;
                        while (i < n1 && j < n2) {
                            if (L[i] <= R[j]) {
                                arr[k] = L[i];
                                i++;
                            } else {
                                arr[k] = R[j];
                                j++;
                            }
                            k++;
                        }
                        while (i < n1) {
                            arr[k] = L[i];
                            i++;
                            k++;
                        }
                        while (j < n2) {
                            arr[k] = R[j];
                            j++;
                            k++;
                        }
                    }

                    void mergeSort(int arr[], int l, int r) {
                        if (l < r) {
                            int m = l + (r - l) / 2;
                            mergeSort(arr, l, m);
                            mergeSort(arr, m + 1, r);
                            merge(arr, l, m, r);
                        }
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    struct Node {
                        int data;
                        Node *left, *right;
                        Node(int value) : data(value), left(nullptr), right(nullptr) {}
                    };

                    class BST {
                    private:
                        Node* root;

                        Node* insert(Node* node, int key) {
                            if (node == nullptr) return new Node(key);
                            if (key < node->data)
                                node->left = insert(node->left, key);
                            else if (key > node->data)
                                node->right = insert(node->right, key);
                            return node;
                        }

                        Node* search(Node* root, int key) {
                            if (root == nullptr || root->data == key)
                                return root;
                            if (root->data < key)
                                return search(root->right, key);
                            return search(root->left, key);
                        }

                    public:
                        BST() : root(nullptr) {}

                        void insert(int key) {
                            root = insert(root, key);
                        }

                        bool search(int key) {
                            return search(root, key) != nullptr;
                        }
                    };
                `
            },
            {
                name: "Binary Search",
                code: `
                    int binarySearch(int arr[], int l, int r, int x) {
                        while (l <= r) {
                            int m = l + (r - l) / 2;
                            if (arr[m] == x)
                                return m;
                            if (arr[m] < x)
                                l = m + 1;
                            else
                                r = m - 1;
                        }
                        return -1;
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    #include <queue>

                    struct Node {
                        int data;
                        Node *left, *right;
                    };

                    void bfs(Node *root) {
                        if (root == nullptr)
                            return;

                        std::queue<Node*> q;
                        q.push(root);

                        while (!q.empty()) {
                            Node *node = q.front();
                            std::cout << node->data << " ";
                            q.pop();

                            if (node->left != nullptr)
                                q.push(node->left);

                            if (node->right != nullptr)
                                q.push(node->right);
                        }
                    }
                `
            }
        ]
    },
    {
        name: "Go",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    func quickSort(arr []int, low, high int) {
                        if low < high {
                            pi := partition(arr, low, high)
                            quickSort(arr, low, pi-1)
                            quickSort(arr, pi+1, high)
                        }
                    }

                    func partition(arr []int, low, high int) int {
                        pivot := arr[high]
                        i := low - 1
                        for j := low; j < high; j++ {
                            if arr[j] < pivot {
                                i++
                                arr[i], arr[j] = arr[j], arr[i]
                            }
                        }
                        arr[i+1], arr[high] = arr[high], arr[i+1]
                        return i + 1
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    func mergeSort(arr []int) []int {
                        if len(arr) <= 1 {
                            return arr
                        }

                        mid := len(arr) / 2
                        left := mergeSort(arr[:mid])
                        right := mergeSort(arr[mid:])

                        return merge(left, right)
                    }

                    func merge(left, right []int) []int {
                        result := make([]int, 0, len(left)+len(right))
                        i, j := 0, 0
                        for i < len(left) && j < len(right) {
                            if left[i] <= right[j] {
                                result = append(result, left[i])
                                i++
                            } else {
                                result = append(result, right[j])
                                j++
                            }
                        }
                        result = append(result, left[i:]...)
                        result = append(result, right[j:]...)
                        return result
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    type Node struct {
                        Value int
                        Left  *Node
                        Right *Node
                    }

                    func (n *Node) Insert(value int) {
                        if n == nil {
                            return
                        }
                        if value <= n.Value {
                            if n.Left == nil {
                                n.Left = &Node{Value: value}
                            } else {
                                n.Left.Insert(value)
                            }
                        } else {
                            if n.Right == nil {
                                n.Right = &Node{Value: value}
                            } else {
                                n.Right.Insert(value)
                            }
                        }
                    }

                    func (n *Node) Search(value int) bool {
                        if n == nil {
                            return false
                        }
                        if value == n.Value {
                            return true
                        } else if value < n.Value {
                            return n.Left.Search(value)
                        } else {
                            return n.Right.Search(value)
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    func binarySearch(arr []int, target int) int {
                        left, right := 0, len(arr)-1
                        for left <= right {
                            mid := (left + right) / 2
                            if arr[mid] == target {
                                return mid
                            } else if arr[mid] < target {
                                left = mid + 1
                            } else {
                                right = mid - 1
                            }
                        }
                        return -1
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    type Node struct {
                        Value int
                        Left  *Node
                        Right *Node
                    }

                    func bfs(root *Node) []int {
                        if root == nil {
                            return nil
                        }

                        var result []int
                        queue := []*Node{root}

                        for len(queue) > 0 {
                            node := queue[0]
                            queue = queue[1:]
                            result = append(result, node.Value)

                            if node.Left != nil {
                                queue = append(queue, node.Left)
                            }
                            if node.Right != nil {
                                queue = append(queue, node.Right)
                            }
                        }

                        return result
                    }
                `
            }
        ]
    },
    {
        name: "Java",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    public class QuickSort {
                        public static void quickSort(int[] arr, int low, int high) {
                            if (low < high) {
                                int pi = partition(arr, low, high);
                                quickSort(arr, low, pi - 1);
                                quickSort(arr, pi + 1, high);
                            }
                        }

                        private static int partition(int[] arr, int low, int high) {
                            int pivot = arr[high];
                            int i = (low - 1);
                            for (int j = low; j < high; j++) {
                                if (arr[j] < pivot) {
                                    i++;
                                    int temp = arr[i];
                                    arr[i] = arr[j];
                                    arr[j] = temp;
                                }
                            }
                            int temp = arr[i + 1];
                            arr[i + 1] = arr[high];
                            arr[high] = temp;
                            return i + 1;
                        }
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    public class MergeSort {
                        public static void mergeSort(int[] arr, int l, int r) {
                            if (l < r) {
                                int m = (l + r) / 2;
                                mergeSort(arr, l, m);
                                mergeSort(arr, m + 1, r);
                                merge(arr, l, m, r);
                            }
                        }

                        private static void merge(int[] arr, int l, int m, int r) {
                            int n1 = m - l + 1;
                            int n2 = r - m;
                            int L[] = new int[n1];
                            int R[] = new int[n2];
                            for (int i = 0; i < n1; ++i)
                                L[i] = arr[l + i];
                            for (int j = 0; j < n2; ++j)
                                R[j] = arr[m + 1 + j];
                            int i = 0, j = 0;
                            int k = l;
                            while (i < n1 && j < n2) {
                                if (L[i] <= R[j]) {
                                    arr[k] = L[i];
                                    i++;
                                } else {
                                    arr[k] = R[j];
                                    j++;
                                }
                                k++;
                            }
                            while (i < n1) {
                                arr[k] = L[i];
                                i++;
                                k++;
                            }
                            while (j < n2) {
                                arr[k] = R[j];
                                j++;
                                k++;
                            }
                        }
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    public class BinarySearchTree {
                        class Node {
                            int key;
                            Node left, right;

                            public Node(int item) {
                                key = item;
                                left = right = null;
                            }
                        }

                        Node root;

                        BinarySearchTree() {
                            root = null;
                        }

                        void insert(int key) {
                            root = insertRec(root, key);
                        }

                        Node insertRec(Node root, int key) {
                            if (root == null) {
                                root = new Node(key);
                                return root;
                            }
                            if (key < root.key)
                                root.left = insertRec(root.left, key);
                            else if (key > root.key)
                                root.right = insertRec(root.right, key);
                            return root;
                        }

                        Node search(Node root, int key) {
                            if (root == null || root.key == key)
                                return root;
                            if (root.key > key)
                                return search(root.left, key);
                            return search(root.right, key);
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    public class BinarySearch {
                        public static int binarySearch(int[] arr, int l, int r, int x) {
                            if (r >= l) {
                                int mid = l + (r - l) / 2;
                                if (arr[mid] == x)
                                    return mid;
                                if (arr[mid] > x)
                                    return binarySearch(arr, l, mid - 1, x);
                                return binarySearch(arr, mid + 1, r, x);
                            }
                            return -1;
                        }
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    import java.util.*;

                    public class BreadthFirstSearch {
                        static class Node {
                            int data;
                            Node left, right;
                            public Node(int item) {
                                data = item;
                                left = right = null;
                            }
                        }

                        public static void bfs(Node root) {
                            if (root == null)
                                return;

                            Queue<Node> queue = new LinkedList<>();
                            queue.add(root);

                            while (!queue.isEmpty()) {
                                Node tempNode = queue.poll();
                                System.out.print(tempNode.data + " ");

                                if (tempNode.left != null)
                                    queue.add(tempNode.left);

                                if (tempNode.right != null)
                                    queue.add(tempNode.right);
                            }
                        }
                    }
                `
            }
        ]
    },
    {
        name: "Javascript",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    function quickSort(arr, low = 0, high = arr.length - 1) {
                        if (low < high) {
                            const pivotIndex = partition(arr, low, high);
                            quickSort(arr, low, pivotIndex - 1);
                            quickSort(arr, pivotIndex + 1, high);
                        }
                        return arr;
                    }

                    function partition(arr, low, high) {
                        const pivot = arr[high];
                        let i = low - 1;
                        for (let j = low; j < high; j++) {
                            if (arr[j] < pivot) {
                                i++;
                                [arr[i], arr[j]] = [arr[j], arr[i]];
                            }
                        }
                        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                        return i + 1;
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    function mergeSort(arr) {
                        if (arr.length <= 1) return arr;
                        const mid = Math.floor(arr.length / 2);
                        const left = mergeSort(arr.slice(0, mid));
                        const right = mergeSort(arr.slice(mid));
                        return merge(left, right);
                    }

                    function merge(left, right) {
                        let result = [];
                        let leftIndex = 0;
                        let rightIndex = 0;
                        while (leftIndex < left.length && rightIndex < right.length) {
                            if (left[leftIndex] < right[rightIndex]) {
                                result.push(left[leftIndex]);
                                leftIndex++;
                            } else {
                                result.push(right[rightIndex]);
                                rightIndex++;
                            }
                        }
                        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    class Node {
                        constructor(value) {
                            this.value = value;
                            this.left = null;
                            this.right = null;
                        }
                    }

                    class BinarySearchTree {
                        constructor() {
                            this.root = null;
                        }

                        insert(value) {
                            const newNode = new Node(value);
                            if (!this.root) {
                                this.root = newNode;
                                return this;
                            }
                            let current = this.root;
                            while (true) {
                                if (value === current.value) return undefined;
                                if (value < current.value) {
                                    if (current.left === null) {
                                        current.left = newNode;
                                        return this;
                                    }
                                    current = current.left;
                                } else {
                                    if (current.right === null) {
                                        current.right = newNode;
                                        return this;
                                    }
                                    current = current.right;
                                }
                            }
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    function binarySearch(arr, target) {
                        let left = 0;
                        let right = arr.length - 1;
                        while (left <= right) {
                            const mid = Math.floor((left + right) / 2);
                            if (arr[mid] === target) {
                                return mid;
                            } else if (arr[mid] < target) {
                                left = mid + 1;
                            } else {
                                right = mid - 1;
                            }
                        }
                        return -1;
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    class Node {
                        constructor(value) {
                            this.value = value;
                            this.left = null;
                            this.right = null;
                        }
                    }

                    function breadthFirstSearch(root) {
                        if (!root) return [];
                        const queue = [root];
                        const result = [];
                        while (queue.length > 0) {
                            const node = queue.shift();
                            result.push(node.value);
                            if (node.left) queue.push(node.left);
                            if (node.right) queue.push(node.right);
                        }
                        return result;
                    }
                `
            }
        ]
    },
    {
        name: "Kotlin",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    fun quickSort(arr: IntArray, low: Int, high: Int) {
                        if (low < high) {
                            val pivotIndex = partition(arr, low, high)
                            quickSort(arr, low, pivotIndex - 1)
                            quickSort(arr, pivotIndex + 1, high)
                        }
                    }

                    fun partition(arr: IntArray, low: Int, high: Int): Int {
                        val pivot = arr[high]
                        var i = low - 1
                        for (j in low until high) {
                            if (arr[j] < pivot) {
                                i++
                                val temp = arr[i]
                                arr[i] = arr[j]
                                arr[j] = temp
                            }
                        }
                        val temp = arr[i + 1]
                        arr[i + 1] = arr[high]
                        arr[high] = temp
                        return i + 1
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    fun mergeSort(arr: IntArray): IntArray {
                        if (arr.size <= 1) return arr
                        val mid = arr.size / 2
                        val left = arr.sliceArray(0 until mid)
                        val right = arr.sliceArray(mid until arr.size)
                        return merge(mergeSort(left), mergeSort(right))
                    }

                    fun merge(left: IntArray, right: IntArray): IntArray {
                        var leftIndex = 0
                        var rightIndex = 0
                        val merged = IntArray(left.size + right.size)
                        var mergedIndex = 0
                        while (leftIndex < left.size && rightIndex < right.size) {
                            if (left[leftIndex] <= right[rightIndex]) {
                                merged[mergedIndex++] = left[leftIndex++]
                            } else {
                                merged[mergedIndex++] = right[rightIndex++]
                            }
                        }
                        while (leftIndex < left.size) {
                            merged[mergedIndex++] = left[leftIndex++]
                        }
                        while (rightIndex < right.size) {
                            merged[mergedIndex++] = right[rightIndex++]
                        }
                        return merged
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    class Node(var value: Int) {
                        var left: Node? = null
                        var right: Node? = null
                    }

                    class BinarySearchTree {
                        var root: Node? = null

                        fun insert(value: Int) {
                            root = insertRec(root, value)
                        }

                        private fun insertRec(_ node: Node?, _ value: Int) -> Node {
                            if (node == null) {
                                return Node(value)
                            }
                            if (value < node.value) {
                                node.left = insertRec(node.left, value)
                            } else if (value > node.value) {
                                node.right = insertRec(node.right, value)
                            }

                            return node
                        }

                        fun search(value: Int): Boolean {
                            return searchRec(root, value)
                        }

                        private fun searchRec(_ node: Node?, _ value: Int) -> Boolean {
                            if (node == null || node.value == value) {
                                return node != null
                            }
                            return if (value < node.value) {
                                searchRec(node.left, value)
                            } else {
                                searchRec(node.right, value)
                            }
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    fun binarySearch(arr: IntArray, target: Int): Int {
                        var left = 0
                        var right = arr.size - 1
                        while (left <= right) {
                            val mid = left + (right - left) / 2
                            when {
                                arr[mid] == target -> return mid
                                arr[mid] < target -> left = mid + 1
                                else -> right = mid - 1
                            }
                        }
                        return -1
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    import java.util.*

                    class Node(var value: Int) {
                        var left: Node? = null
                        var right: Node? = null
                    }

                    fun breadthFirstSearch(root: Node?): List<Int> {
                        val result = mutableListOf<Int>()
                        if (root == null) return result
                        val queue: Queue<Node> = LinkedList()
                        queue.offer(root)
                        while (queue.isNotEmpty()) {
                            val node = queue.poll()
                            result.add(node.value)
                            node.left?.let { queue.offer(it) }
                            node.right?.let { queue.offer(it) }
                        }
                        return result
                    }
                `
            }
        ]
    },
    {
        name: "PHP",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    function quickSort(&$arr, $low, $high) {
                        if ($low < $high) {
                            $pi = partition($arr, $low, $high);
                            quickSort($arr, $low, $pi - 1);
                            quickSort($arr, $pi + 1, $high);
                        }
                    }

                    function partition(&$arr, $low, $high) {
                        $pivot = $arr[$high];
                        $i = $low - 1;
                        for ($j = $low; $j < $high; $j++) {
                            if ($arr[$j] < $pivot) {
                                $i++;
                                $temp = $arr[$i];
                                $arr[$i] = $arr[$j];
                                $arr[$j] = $temp;
                            }
                        }
                        $temp = $arr[$i + 1];
                        $arr[$i + 1] = $arr[$high];
                        $arr[$high] = $temp;
                        return $i + 1;
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    function mergeSort($arr) {
                        $count = count($arr);
                        if ($count <= 1) {
                            return $arr;
                        }

                        $mid = (int)($count / 2);
                        $left = array_slice($arr, 0, $mid);
                        $right = array_slice($arr, $mid);

                        $left = mergeSort($left);
                        $right = mergeSort($right);

                        return merge($left, $right);
                    }

                    function merge($left, $right) {
                        $result = [];
                        $leftCount = count($left);
                        $rightCount = count($right);
                        $i = 0;
                        $j = 0;

                        while ($i < $leftCount && $j < $rightCount) {
                            if ($left[$i] < $right[$j]) {
                                $result[] = $left[$i];
                                $i++;
                            } else {
                                $result[] = $right[$j];
                                $j++;
                            }
                        }

                        while ($i < $leftCount) {
                            $result[] = $left[$i];
                            $i++;
                        }

                        while ($j < $rightCount) {
                            $result[] = $right[$j];
                            $j++;
                        }

                        return $result;
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    class Node {
                        public $value;
                        public $left;
                        public $right;

                        public function __construct($value) {
                            $this->value = $value;
                            $this->left = null;
                            $this->right = null;
                        }
                    }

                    class BinarySearchTree {
                        private $root;

                        public function __construct() {
                            $this->root = null;
                        }

                        public function insert($value) {
                            $this->root = $this->insertNode($this->root, $value);
                        }

                        private function insertNode($node, $value) {
                            if ($node === null) {
                                return new Node($value);
                            }

                            if ($value < $node->value) {
                                $node->left = $this->insertNode($node->left, $value);
                            } elseif ($value > $node->value) {
                                $node->right = $this->insertNode($node->right, $value);
                            }

                            return $node;
                        }

                        public function search($value) {
                            return $this->searchRec($this->root, $value);
                        }

                        private function searchRec($node, $value) {
                            if ($node === null || $node->value == $value) {
                                return $node;
                            }
                            if ($value < $node->value) {
                                return $this->searchRec($node->left, $value);
                            } else {
                                return $this->searchRec($node->right, $value);
                            }
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    function binarySearch($arr, $target) {
                        $left = 0;
                        $right = count($arr) - 1;

                        while ($left <= $right) {
                            $mid = $left + (int)(($right - $left) / 2);

                            if ($arr[$mid] == $target) {
                                return $mid;
                            }

                            if ($arr[$mid] < $target) {
                                $left = $mid + 1;
                            } else {
                                $right = $mid - 1;
                            }
                        }

                        return -1;
                    }
                `
            },
            {
                name: "Breadth First Search",
                code: `
                    class Node {
                        public $value;
                        public $left;
                        public $right;

                        public function __construct($value) {
                            $this->value = $value;
                            $this->left = null;
                            $this->right = null;
                        }
                    }

                    function breadthFirstSearch($root) {
                        if ($root === null) {
                            return [];
                        }

                        $queue = new SplQueue();
                        $queue->enqueue($root);
                        $result = [];

                        while (!$queue->isEmpty()) {
                            $node = $queue->dequeue();
                            $result[] = $node->value;

                            if ($node->left !== null) {
                                $queue->enqueue($node->left);
                            }
                            if ($node->right !== null) {
                                $queue->enqueue($node->right);
                            }
                        }

                        return $result;
                    }
                `
            }
        ]
    },
    {
        name: "Python",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    def quick_sort(arr):
                        def partition(arr, low, high):
                            pivot = arr[high]
                            i = low - 1
                            for j in range(low, high):
                                if arr[j] <= pivot:
                                    i += 1
                                    arr[i], arr[j] = arr[j], arr[i]
                            arr[i + 1], arr[high] = arr[high], arr[i + 1]
                            return i + 1

                        def quick_sort_helper(arr, low, high):
                            if low < high:
                                pi = partition(arr, low, high)
                                quick_sort_helper(arr, low, pi - 1)
                                quick_sort_helper(arr, pi + 1, high)

                        quick_sort_helper(arr, 0, len(arr) - 1)
                        return arr

                    arr = [64, 34, 25, 12, 22, 11, 90]
                    sorted_arr = quick_sort(arr)
                    print("Sorted array:", sorted_arr)
                `
            },
            {
                name: "Merge Sort",
                code: `
                    def merge_sort(arr):
                        def merge(left, right):
                            result = []
                            i, j = 0, 0
                            while i < len(left) and j < len(right):
                                if left[i] <= right[j]:
                                    result.append(left[i])
                                    i += 1
                                else:
                                    result.append(right[j])
                                    j += 1
                            result.extend(left[i:])
                            result.extend(right[j:])
                            return result

                        def merge_sort_helper(arr):
                            if len(arr) <= 1:
                                return arr
                            mid = len(arr) // 2
                            left = merge_sort(arr[:mid])
                            right = merge_sort(arr[mid:])
                            return merge(left, right)

                        return merge_sort_helper(arr)

                    arr = [64, 34, 25, 12, 22, 11, 90]
                    sorted_arr = merge_sort(arr)
                    print("Sorted array:", sorted_arr)
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    class BinarySearchTree:
                        def __init__(self):
                            self.root = None

                        def insert(self, value):
                            if not self.root:
                                self.root = Node(value)
                            else:
                                self._insert_recursive(self.root, value)

                        def _insert_recursive(self, node, value):
                            if value < node.value:
                                if node.left is None:
                                    node.left = Node(value)
                                else:
                                    self._insert_recursive(node.left, value)
                            else:
                                if node.right is None:
                                    node.right = Node(value)
                                else:
                                    self._insert_recursive(node.right, value)

                        def search(self, value):
                            return self._search_recursive(self.root, value)

                        def _search_recursive(self, node, value):
                            if node is None:
                                return False
                            if node.value == value:
                                return True
                            elif value < node.value:
                                return self._search_recursive(node.left, value)
                            else:
                                return self._search_recursive(node.right, value)
                `
            },
            {
                name: "Binary Search",
                code: `
                    def binary_search(arr, target):
                        def binary_search_recursive(arr, target, low, high):
                            if high >= low:
                                mid = (high + low) // 2
                                if arr[mid] == target:
                                    return mid
                                elif arr[mid] > target:
                                    return binary_search_recursive(arr, target, low, mid - 1)
                                else:
                                    return binary_search_recursive(arr, target, mid + 1, high)
                            else:
                                return -1

                        return binary_search_recursive(arr, target, 0, len(arr) - 1)

                    arr = [2, 3, 4, 10, 40]
                    target = 10
                    result = binary_search(arr, target)
                    if result != -1:
                        print(f"Element {target} is present at index {result}")
                    else:
                        print("Element is not present in array")
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    from collections import deque

                    class Node:
                        def __init__(self, value):
                            self.value = value
                            self.left = None
                            self.right = None

                    def bfs(root):
                        if not root:
                            return []
                        queue = deque([root])
                        result = []
                        while queue:
                            node = queue.popleft()
                            result.append(node.value)
                            if node.left:
                                queue.append(node.left)
                            if node.right:
                                queue.append(node.right)
                        return result
                `
            }
        ]
    },
    {
        name: "Swift",
        examples: [
            {
                name: "Quick Sort",
                code: `
                    func quickSort(_ arr: inout [Int], _ low: Int, _ high: Int) {
                        if low < high {
                            let pi = partition(&arr, low, high)
                            quickSort(&arr, low, pi - 1)
                            quickSort(&arr, pi + 1, high)
                        }
                    }

                    func partition(_ arr: inout [Int], _ low: Int, _ high: Int) -> Int {
                        let pivot = arr[high]
                        var i = low - 1
                        for j in low..<high {
                            if arr[j] < pivot {
                                i += 1
                                arr.swapAt(i, j)
                            }
                        }
                        arr.swapAt(i + 1, high)
                        return i + 1
                    }
                `
            },
            {
                name: "Merge Sort",
                code: `
                    func mergeSort(_ array: [Int]) -> [Int] {
                        guard array.count > 1 else { return array }
                        let middleIndex = array.count / 2
                        let leftArray = mergeSort(Array(array[0..<middleIndex]))
                        let rightArray = mergeSort(Array(array[middleIndex..<array.count]))
                        return merge(leftArray, rightArray)
                    }

                    func merge(_ left: [Int], _ right: [Int]) -> [Int] {
                        var leftIndex = 0
                        var rightIndex = 0
                        var result = [Int]()

                        while leftIndex < left.count && rightIndex < right.count {
                            if left[leftIndex] < right[rightIndex] {
                                result.append(left[leftIndex])
                                leftIndex += 1
                            } else {
                                result.append(right[rightIndex])
                                rightIndex += 1
                            }
                        }

                        result.append(contentsOf: left[leftIndex..<left.count])
                        result.append(contentsOf: right[rightIndex..<right.count])
                        return result
                    }
                `
            },
            {
                name: "Binary Search Tree",
                code: `
                    class BinarySearchTree {
                        var root: Node?

                        func insert(_ value: Int) {
                            root = insertRec(root, value)
                        }

                        private func insertRec(_ node: Node?, _ value: Int) -> Node {
                            guard let node = node else {
                                return Node(value)
                            }

                            if value < node.value {
                                node.left = insertRec(node.left, value)
                            } else if value > node.value {
                                node.right = insertRec(node.right, value)
                            }

                            return node
                        }

                        func search(_ value: Int) -> Bool {
                            return searchRec(root, value)
                        }

                        private func searchRec(_ node: Node?, _ value: Int) -> Bool {
                            guard let node = node else {
                                return false
                            }

                            if node.value == value {
                                return true
                            } else if value < node.value {
                                return searchRec(node.left, value)
                            } else {
                                return searchRec(node.right, value)
                            }
                        }
                    }
                `
            },
            {
                name: "Binary Search",
                code: `
                    func binarySearch(_ arr: [Int], _ target: Int) -> Int {
                        var left = 0
                        var right = arr.count - 1

                        while left <= right {
                            let mid = left + (right - left) / 2
                            if arr[mid] == target {
                                return mid
                            } else if arr[mid] < target {
                                left = mid + 1
                            } else {
                                right = mid - 1
                            }
                        }

                        return -1
                    }
                `
            },
            {
                name: "Breadth First Search in a Tree",
                code: `
                    class Node {
                        var value: Int
                        var left: Node?
                        var right: Node?

                        init(_ value: Int) {
                            self.value = value
                        }
                    }

                    func breadthFirstSearch(_ root: Node?) -> [Int] {
                        guard let root = root else { return [] }

                        var result = [Int]()
                        var queue = [Node]()
                        queue.append(root)

                        while !queue.isEmpty {
                            let node = queue.removeFirst()
                            result.append(node.value)

                            if let left = node.left {
                                queue.append(left)
                            }
                            if let right = node.right {
                                queue.append(right)
                            }
                        }

                        return result
                    }
                `
            }
        ]
    }
]
