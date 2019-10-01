import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'reusable-avatar',
  styleUrl: 'reusable-avatar.css',
  shadow: true
})
export class MyComponent {
  
  @Prop() avatarUrl: string;

  @Prop() friends: number;
  @Prop() groups: number;
  @Prop() articles: number;

  render() {
    return (
      <div class="avatar-container">
          <div class="dot dot-friends">{this.friends}</div>
          <div class="dot dot-groups">{this.groups}</div>
          <div class="dot dot-articles">{this.articles}</div>
          <img class="avatar" src={this.avatarUrl} alt="Avatar" />
      </div>
    )
  }
}
