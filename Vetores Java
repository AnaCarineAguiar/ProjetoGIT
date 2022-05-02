import java.util.Scanner;

public class Main {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.println("Insira a quantidade de números da lista");

    int N = sc.nextInt();

    int[] vetor = new int[N];

    System.out.println("insira a sequência dos números");

    for (int i = 0; i < N; i++) {

      int numeros = sc.nextInt();

      vetor[i] = numeros;

    }

    System.out.println("diferença entre as extremidades: " + DiferencaElemento(vetor, N));

    System.out.println();

    if (Crescente(vetor, N) == 1) {

      System.out.println("Está em ordem crescente: true!");

    } else

      System.out.println("Não está em ordem crescente: false!");

    sc.close();
  }

  static int DiferencaElemento(int[] vetor, int N) {

    int diferenca = 0;

    int maior = vetor[0];

    for (int i = 0; i < N; i++) {
      if (vetor[i] > maior) {

        maior = vetor[i];
      }

    }

    int menor = vetor[0];

    for (int i = 0; i < N; i++) {
      if (vetor[i] < menor) {
        menor = vetor[i];
      }

    }

    return diferenca = maior - menor;

  }

  static int Crescente(int[] vetor, int N) {

    for (int i = 1; i < N; i++) {
      if (vetor[i - 1] > vetor[i]) {
        return 0;
      }
    }

    return 1;

  }
}
